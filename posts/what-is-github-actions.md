---
title: "What Is GitHub Actions?"
date: "2023-03-11"
feature: "true"
previewImage: "githubActions"
preview: "GitHub Actions is a great way to handle your application CI/CD workflow. Deployments are made easy by the fully automated, customisable processes."
---

GitHub Actions is a continuous integration/continuous delivery (CI/CD) platform which allows you to build, test and deploy your applications.

It was originally released in 2018, and provides developers with a way to create pipelines within GitHub itself, rather than relying on external tools (Team City, Azure Pipelines etc) to do so.

For example, you can use GitHub Actions to push your code to Azure Container Registry, or Docker Hub, or another similar provider.

## What Is CI/CD?

I’ll go into more detail on this in a future post, but briefly, CI/CD is a modern approach to releasing software, where smaller, incremental code changes are made and released to production more frequently.

Changes are still tested by automated processes, to ensure no breaking changes are released. This automation is one of the great advantages of having a CI/CD pipeline in place.

For example, you can set things up so that as soon as you commit a code change and push to GitHub, a process is started which installs your dependencies, builds your app, tests it and deploys it automatically. Pretty cool stuff.

## What Are Some Examples of Things GitHub Actions Can Do?

They are so customisable that really, the sky is the limit, but here are some examples of the type of thing you can do with GitHub Actions:

- Starting with the obvious, test and release your code whenever a new PR is merged
- Set up a scheduled workflow to optimise your images and assets if needed
- Check the contents of your repository Issues and assign appropriate labels
- Generate release notes with every new release
- Check for stale Issues in your repository, and close them if necessary

These just scratch the surface, but you get the idea. If you dream it up, you can probably do it!

![Pipeline](../images/pipeline.webp "inline")

## How Do GitHub Actions Work Exactly?

There are some key concepts to familiarise yourself with which make things so much easier to understand when working with GitHub Actions.

### Workflows

A workflow is a YAML file which will run one or more jobs. It will trigger automatically on an event of your choosing. Each workflow is stored as a separate YAML file in your code repository, in a directory named `.github/workflows`.

### Events

An event is an activity in a repository which triggers your workflow to run. This can be anything from creating a PR to opening an issue.

You can have GitHub Actions run on [loads of different events](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows) of your choosing.

You could have it run whenever a commit to a branch is made. I found this very useful recently at work because it allowed me to make a commit to my feature branch while I was testing and see the result immediately, without the extra hassle of creating and merging PR's.

You can set a GitHub Actions schedule to ensure your workflow runs at a time of your choosing. This could be useful for closing stale issues in your repository in the middle of the night, for example.

You can even set workflows to run when something happens _outside_ of GitHub, using the `repository_dispatch` event.

You can also trigger your workflow to run manually, from within the GitHub UI.

### Jobs

A job is a set of _steps_ inside a workflow. Each step either executes a shell script, or runs an _action_. You can share data between steps, as they run in order. For example, you can build your app in one step, then test the result of that build in another.

### Actions

An action is a custom application for GitHub Actions that performs a complex but frequently repeated task. You should use this to enforce the [DRY principle](https://zapier.com/blog/dont-repeat-yourself/).

### Runners

A runner is a server that runs your workflow when it's triggered. Each runner can run a single job at a time. GitHub provides Ubuntu Linux, Microsoft Windows, and macOS runners to run your workflows; each workflow run executes in a fresh, newly-provisioned virtual machine.

![GitHub Mascot](../images/github.webp "inline")

## Real-World Example

Let's run through a real-world example which I've just been working on at ASOS. Obviously I can't go into any specific detail about the project, but we have a repo with two packages, both of which we need to be able to deploy to Azure Artifacts.

To avoid any code repetition, we need to utilise the _actions_ described above. In our case, we combine that with a [matrix](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs), which basically stores the details of each of our packages in an array, and runs our action for each of those entries.

### Inside Our Workflow YAML File

We'll start off in the workflow file, which as you'll remember is the file which will be triggered on an event of your choosing and orchestrate all of your chosen jobs. The filepath to this file is: `./.github/workflows/publishPackages.yaml`

```
on:
  pull_request:
    types:
      - closed
```

For this particular workflow, we want to trigger in the event that a pull request is closed.

```
jobs:
  get-package-details:
    runs-on: ubuntu-latest
    outputs:
      name: ${{ steps.details.outputs.name }}
      version: ${{ steps.details.outputs.version_bump }}
    steps:
      - name: Determine package version from Pr body
        id: details
        shell: bash
        run: |
          NAME="fantasticPackage"
          VERSION_BUMP="NA"

          if [[ "$BODY" == *"[x] [Patch]"* ]]; then
            VERSION_BUMP="patch"
          fi

          if [[ "$BODY" == *"[x] [Minor]"* ]]; then
            VERSION_BUMP="minor"
          fi

          if [[ "$BODY" == *"[x] [Major]"* ]]; then
            VERSION_BUMP="major"
          fi

          echo "version_bump=$VERSION_BUMP" >> $GITHUB_OUTPUT
          echo "name=$NAME" >> $GITHUB_OUTPUT
        env:
          BODY: ${{ github.event.pull_request.body }}
```

This is a really cool part. We have added checkboxes to our PR template, allowing you to select whether this PR is releasing a Patch, Minor or Major version of the package. When the workflow gets triggered by our PR merge, it checks the PR body contents (passed in by the `env: BODY: ${{ github.event.pull_request.body }}` environment variable) and determines which of the checkboxes you've selected. It then passes that version on to the next job in the workflow using `>> $GITHUB_OUTPUT`.

```
publish:
  needs: [get-package-details, get-other-package-details]
  if: ${{ github.event.pull_request.merged == true }}
  runs-on: ubuntu-latest
  strategy:
    fail-fast: false
    matrix:
      package:
        [
          {
            name: "fantasticPackage",
            version: "${{needs.get-package-details.outputs.version}}",
          },
          { name: "otherFantasticPackage",
            version: "${{needs.get-other-package-details.outputs.version}}",
          },
        ]
  steps:
    ...
    - name: Publish package
      uses: ./.github/actions/publish
      with:
        name: ${{ matrix.package.name }}
        version: ${{ matrix.package.version }}
```

The next job in the workflow,`publish`, `needs` the previous job, where we retrieved our package version. It checks to see if the PR has actually been _merged_, as opposed to just closed. If it hasn't, the job will not run.

We then create the matrix, which is an array of two objects. One for each package we need to release. The following steps will then be run for each entry we have in our matrix, in our case twice, once for each package.

There are then interim steps which I've removed to keep things succinct, but they basically do our authentication with Azure, to allow us to be able to publish our packages if required (otherwise you would get an unauthorised error).

The `Publish package` step then runs twice. Once for each entry in our matrix. The runs will be as follows:

- Run 1 - `name` will be `fantasticPackage`, `version` will be the version output from the `get-package-details` job.
- Run 2 - `name` will be `otherFantasticPackage`, `version` will be the version output from the `get-other-package-details` job.

It uses `with` to pass in our matrix `name` and `version` values to the action.

### Inside Our "Publish" Actions File

You'll notice that the `Publish package` step in the previous bit of code `uses` a particular GitHub Actions file. We will look at this now. The filepath to this file is: `./.github/actions/publish/actions.yaml`

```
name: Publish
inputs:
  name:
    description: "Package name"
    required: true
  version:
    description: "New version of package"
    required: true
```

The action is named, and below that we specify the `inputs` that we are expecting (the values passed in using `with` in the workflow file). This will be the `name` and `version` for the first entry in our matrix.

````
runs:
  steps:
    - name: Reject Any NA Packages
      if: ${{ inputs.version == 'NA' }}
      run: |
        echo "### Do not release ${{ inputs.name }} package. Version is set to:" >> $GITHUB_STEP_SUMMARY
        echo '```' >> $GITHUB_STEP_SUMMARY
        echo ${{ inputs.version }} >> $GITHUB_STEP_SUMMARY
        echo '```' >> $GITHUB_STEP_SUMMARY
      shell: bash
````

If we have not selected any checkboxes in our PR i.e. we do not want to release our package, our version will have defaulted to NA. To save time and effort, if this is the case then this step will just not run at all. We use `>> $GITHUB_STEP_SUMMARY` to provide a nice output in GitHub informing us of this.

```
- name: Set up Node
  if: ${{ inputs.version != 'NA' }}
  uses: actions/setup-node@v3
  with:
    node-version: 18
    cache: yarn

- name: Install dependencies
  if: ${{ inputs.version != 'NA' }}
  run: yarn --cwd packages/${{ inputs.name }} install --frozen-lockfile
  shell: bash

- name: Run Tests
  if: ${{ inputs.version != 'NA' }}
  run: yarn --cwd packages/${{ inputs.name }} test
  shell: bash
```

With the following steps we first set up node, then install our dependencies for the specific package we are working on, then run the tests.

````
- name: Build Package
  if: ${{ inputs.version != 'NA' }}
  run: yarn --cwd packages/${{ inputs.name }} build
  shell: bash

- name: Set Version
  if: ${{ inputs.version != 'NA' }}
  run: |
    OLD_VERSION=$(cat packages/${{ inputs.name }}/package.json | grep version)
    OLD_VERSION=${OLD_VERSION%\"*}
    OLD_VERSION=${OLD_VERSION##*\"}
    git config --global user.email "asos-ciagent@asos.com"
    git config --global user.name "asos-ciagent"
    yarn config set version-tag-prefix "v"
    yarn config set version-git-message "chore: $OLD_VERSION -> %s"
    yarn --cwd packages/${{ inputs.name }} version --${{ inputs.version }}
  shell: bash

- name: Publish Package
  if: ${{ inputs.version != 'NA' }}
  run: yarn --cwd packages/${{ inputs.name }} publish 2> publish_stderr_digest.log
  id: publish
  shell: bash
- name: Report Publish Failure
  run: |
    echo "### 😞 ${{ inputs.name }} package publish failed:" >> $GITHUB_STEP_SUMMARY
    echo '```' >> $GITHUB_STEP_SUMMARY
    echo "$(cat packages/${{ inputs.name }}/publish_stderr_digest.log)" >> $GITHUB_STEP_SUMMARY
    echo '```' >> $GITHUB_STEP_SUMMARY
  if: failure()
  shell: bash
````

We then build our package, and then use the version number currently specified in the `package.json` file to give a useful commit message for our package update.

Then finally we publish our package! If there is an error we save it to a logfile which we read in the `Report Publish Failure` step. This will only run if `failure()` is true for the preceding step. We use this logfile to again give useful information in the GitHub ui as to what might have gone wrong.

## Summary

GitHub Actions provides a really convenient way of creating a CI/CD pipeline for your development process. You can configure your workflow in an almost limitless number of ways. The customisability is a real advantage, and you should be able to tailor this solution to meet your needs.

Give it a try and let me know what you think!
