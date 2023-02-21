---
title: "What is Vite and Why Should You Use It Instead of Create React App?"
date: "2023-02-21"
feature: "true"
previewImage: "vite.webp"
preview: "Vite is the new kid on the block. Creat React App has lost its crown! Find out why you should be using Vite over Create React App in 2023."
---

## What Exactly Is Create React App? And Vite, For That Matter?

Very simply, Create React App (hereafter referred to as CRA) and Vite (pronounced _veet_, means _fast_ in French) are tools that help you create new React applications.

Any new app will have a lot of boilerplate things that you will want to set up every time:

- A development environment, so you can code your app and view it in the browser
- Linting your code so any errors are flagged
- Transpiling your code to a syntax older browsers can understand
- The ability to build/bundle your app so you can deploy it online

This can be time consuming and fiddly to set up manually, when really all you want to do is start coding! These tools are designed to configure all this for you and take the hassle out of starting a new project from scratch.

## What’s Wrong With Create React App?

Look, it's been the default method for so long for a reason. It's a great way to create your React apps, and it's been so commonly used that it's been refined and perfected over the years.

Traditionally, React applications have commonly been created using CRA:

```
npx create-react-app lukes-amazing-app
cd lukes-amazing-app
npm start
```

However, there are downsides to CRA that Vite hopes to address. As your project grows in size, development and build times increase substantially. The reason for this is because whenever changes are made, CRA rebuilds the whole application. If you have a large number of files, this process can be very time consuming.

Vite provide a diagram demonstrating this behaviour:

![Create React App bunding](../images/create-react-app.webp "inline")

## Why Should We Be Using Vite?

Unlike CRA, Vite does not rebuild the whole app whenever changes are made, it is built on demand. It splits the app into two categories; dependencies and the source code.

**Dependencies** are things that do not often change during the development process. Vite pre-bundles these using esbuild, which is written in Go and is 10-100 times faster than the JavaScript alternative. Because they are so infrequently changed, they can be cached which saves a lot of time.

**Source code** is served over native ESM (ECMAScript modules). The benefit of this method is that there is no need for bundling, they are called on demand when required, and it is incredibly fast.

![Vite process](../images/vite-method.webp "inline")

## Just How Fast Are We Talking?

To answer this question for myself, I went on the hunt for some sizeable, open source CRA apps which I could convert to using Vite in order to see the results!

######

## Example 1 - [Cypress Real World App](https://github.com/cypress-io/cypress-realworld-app)

### Create React App - Development Server Startup

**Note**: The `gnomon` that you see at the end of each command is an [npm package](https://www.npmjs.com/package/gnomon) I used to let me see how long the commands took to execute.

As it stands, this app took 80 seconds to start up the development server:

```
cypress-realworld-app git:(develop) ✗ yarn start:react | gnomon
   0.0463s   yarn run v1.22.19
   2.6274s   $ react-scripts -r @cypress/instrument-cra start
   0.0027s   [HPM] Proxy created: [ '/login', '/callback', '/logout', '/checkAuth', 'graphql' ]  ->  http://localhost:undefined
   0.3958s   [HPM] Subscribed to http-proxy events:  [ 'error', 'close' ]
   0.0017s   ℹ ｢wds｣: Project is running at http://192.168.1.185/
   0.0206s   ℹ ｢wds｣: webpack output is served from
   0.0014s   ℹ ｢wds｣: Content not from webpack is served from /Users/luke/Projects/cypress-realworld-app/public
   0.0016s   ℹ ｢wds｣: 404s will fallback to /
   0.0001s   Starting the development server...
  80.7286s
```

### Vite - Development Server Startup

The result after converting the app to use Vite is quite astonishing! Vite was ready in just 876 ms!

```
cypress-realworld-app git:(develop) ✗ yarn start:react | gnomon
   yarn run v1.22.19
   $ vite

    VITE v4.1.3  ready in 876 ms

    ➜  Local:   http://127.0.0.1:5173/
    ➜  Network: use --host to expose
    ➜  press h to show help
```

Not quite believing my eyes, I went on the hunt for another open source app to test.

## Example 2 - [Write with me](https://github.com/dabit3/write-with-me)

### Create React App - Development Server Startup

As it stands, this app took 6 seconds to start up the development server:

```
write-with-me git:(master) yarn start | gnomon
   0.0903s   yarn run v1.22.19
   3.5556s   $ react-scripts start
   0.0001s   Starting the development server...
   6.0222s
```

### Vite Start - Development Server Startup

Again, Vite blew this out of the water, starting up after just 991 ms. Pretty mind-blowing.

```
write-with-me git:(master) ✗ yarn start
  yarn run v1.22.19
  $ vite

    VITE v4.1.3  ready in 991 ms

    ➜  Local:   http://127.0.0.1:5173/
    ➜  Network: use --host to expose
```

## I'm Convinced! How Do I Use Vite?

### For A Brand New Project

1. Super simple. You can create a Vite project using your favourite package manager.

```
# yarn
yarn create vite

# npm
npm create vite@latest
```

2. Enter your project name at the prompt:

```
success Installed "create-vite@4.1.0" with binaries:
      - create-vite
      - cva
? Project name: › lukes-great-app
```

3. Select which framework you would like for your project. I've selected React in this example:

```
? Select a framework: › - Use arrow-keys. Return to submit.
    Vanilla
    Vue
❯   React
    Preact
    Lit
    Svelte
    Others
```

4. Select the variant. You can use plain JavaScript, or TypeScript, or either of these plus SWC. SWC is a code transpiler much like Babel:

```
? Select a variant: › - Use arrow-keys. Return to submit.
❯   JavaScript
    TypeScript
    JavaScript + SWC
    TypeScript + SWC
```

5. Vite will go on to create your project based on your selections:

```
Scaffolding project in /Users/luke/Projects/lukes-great-app...

Done. Now run:

  cd lukes-great-app
  yarn
  yarn dev

✨  Done in 505.68s.
```

If you like, you can also specify the project name and the template as command line options, instead of going through each of the steps individually:

```
# npm 6.x
npm create vite@latest lukes-great-app --template react

# npm 7+, extra double-dash is needed:
npm create vite@latest lukes-great-app -- --template react

# yarn
yarn create vite lukes-great-app --template react
```

### For An Existing Create React App Project

1. Open your `package.json` file and remove the `react-scripts` entry from dependencies: \
   **Note**: You may have a different version number in your file

```
"dependencies": {
  ...
  "react-scripts": "5.0.0", // Remove this line
  ...
},
```

2. If you are using CSS or SCSS, add the `sass` npm package to your devDependencies:

```
# yarn
yarn add -D sass

# npm
npm i --save-dev sass
```

3. Add `vite` and `@vitejs/plugin-react` npm packages to devDependencies:

```
# yarn
yarn add -D vite @vitejs/plugin-react

# npm
npm i --save-dev vite @vitejs/plugin-react
```

Your `package.json` devDependencies should now include those packages:

```
"devDependencies": {
  "sass": "1.58.3", // optional
  "@vitejs/plugin-react": "1.1.1",
  "vite": "2.7.0"
},
```

4. Open `package.json` and update scripts to match the below:

```
"scripts": {
  "start": "vite",
  "build": "vite build"
},
```

5. Create a `vite.config.js` file in the root folder and add the below: \
   **Note**: The react() plugin is added to avoid you having to manually import React at the top of every single .jsx and .tsx file

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    define: {
      "process.env.NODE_ENV": `"${mode}"`,
    }
  })
}
```

6. Move the `index.html` file from the public folder to the root of the project.

7. Remove all the instances of %PUBLIC_URL% from that `index.html` file:

```
// From
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />

// To
<link rel="icon" href="/favicon.ico" />
```

8. Add the script tag below in the body of that `index.html` file:

```
<div id="root"></div> // Should already exist
<script type="module" src="/src/index.jsx"></script> // Add this line
```

9. If you have any `.env` files, replace REACT_APP with VITE:

```
// From
REACT_APP_ENV = local
REACT_APP_HOST_UR = https://reqres.in/api/

// To
VITE_ENV = local
VITE_HOST_URL = https://reqres.in/api/
```

10. Run npm or yarn one last time:

```
# yarn
yarn

# npm
npm install
```

11. Now run the application:

```
# yarn
yarn start

# npm
npm start
```

Congratulations! Your CRA app should now be successfully migrated to Vite.

## Disadvantages Of Vite

In the interest of making this a fair comparison, we should also consider any potential downsides of using Vite over CRA.

### Package Compatibility Issues

In the process of finding open source projects to make the speed comparisons presented earlier in this post, I did struggle in a few cases to convert the apps to use Vite.

Just following the instructions provided above were not sufficient and I encountered errors with [packages that were incompatible with Vite](https://github.com/vitejs/vite/issues/1315).

For converting an older project to Vite, you’ll need to judge this on a case by case basis, but for a new project you will obviously not have this problem.

### Different Tools For Bundling Development And Production Code

As we have discussed, during development esbuild is used for ultra fast speeds. For production, Rollup is instead used to bundle the code. In rare cases, this mismatch could _potentially_ lead to issues manifesting themselves in production that were not present in development.

## Summary

Create React App has been a fantastic tool for developers wanting a quick, easy way to generate a new React application. Inevitably, as with anything, technology has evolved and an exciting new prospect has arrived, in Vite.

Vite has established a completely new way to generate React applications, with speed at the forefront of its mind. The results from my testing speak for themselves. I am blown away by just how much of an improvement Vite has provided. I will definitely be adopting Vite in my projects from now on, and if you value productivity in your development process, I recommend you do the same.
