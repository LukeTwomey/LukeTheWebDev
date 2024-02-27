---
title: "How I Created This Website"
date: "2023-04-27"
feature: "false"
previewImage: "mockup"
preview: "A lot more goes into making a website than you think. In this post I cover all the steps I went through to create Luke the Web Dev"
---

This website has been a long time coming. My old portfolio site had been abandoned and unloved for years, other than minor tweaks when they became necessary. Even then, the process involved making the changes to the code and then firing up my trusty ftp client to manually upload the file to the web host. Not very modern. Not very 2023. Clearly, something had to change.

## Writing The Website In React

React was the most obvious choice for me to create the site. We all know it's still extremely popular in the web dev world (for good reason), and it's also what I'm most familiar with from previous projects. At first I did consider not using a framework or library at all, but really it's good experience and made sense as a web dev to get another React project underway. You could definitely argue whether it's entirely necessary if you're only going to be creating basic websites for clients.

Initially I started the project using Create React App (this is before [I'd learned about Vite](/blog/what-is-vite-and-why-should-you-use-it-instead-of-create-react-app)). This went along smoothly to start with, and I had already developed a fair bit of the site before I realised the implications for SEO by going down this route.

Create React App uses client side rendering (CSR), meaning when the site is visited, it uses JavaScript to generate the content on the client (including important SEO metadata like page title and description). There is some debate as to whether search engine crawlers these days can handle this just fine, but after some consideration I decided to play it safe and go with a different option.

## My First Foray Into Next.js

Next.js takes a fundamentally different approach when compared to Create React App, in that it uses server side rendering (SSR) to generate the pages first. The client simply loads the HTML with all the metadata already present.

This not only ensures that Google and other search engine bots will be guaranteed to find the metadata they need, it has the added benefit of making page load speeds much faster. Win-win.

There is a small learning curve when it comes to using the Next.js framework itself, but really it's nothing too complex and I'd definitely recommend trying it for your next project if you haven't already.

## To Blog, Or Not To Blog?

That is the question. I'd kept a blog previously, but much like the rest of the site, it had been unloved for quite some time.

In the end, after [debating the pros and cons](/blog/why-should-you-start-a-blog-anyway) I did decide to add one, as you can clearly see!

The benefits for me made sense, and I liked the idea of giving it another go. If you can show it some love and dedicate time to it, then I think it can really pay off and reward you in the long run.

## Storing the Blog Articles

After I'd decided to actually add a blog to the website, the decision to make then was how best to store the blog articles. In my previous blog, I had been writing the post content, then going back and manually copying and pasting all the tags in one go, then copying the whole lot and chucking it into a database field in phpMyAdmin. This wasn't the most streamlined of approaches, and definitely felt clunky and a bit cumbersome.

With the ease of writing technical documentation these days greatly improved by using Markdown - indeed you can find this in readme's and pull requests in big players like GitHub - it felt like the logical choice. I liked the idea of firing up an editor and getting lost in the writing process, with easy syntax to remember for adding headings, links etc.

It's also great for adding code snippets, just wrap your code in a few backticks and Markdown knows this should be treated as code. This is absolutely essential for a dev blog like mine where this is your bread and butter and you will regularly need to be showing code to your readers.

## Using the Markdown Articles in React Components

I found a very useful tool called [react-markdown](https://github.com/remarkjs/react-markdown) which, once you've imported it into your component, lets you wrap your markdown content in `<ReactMarkdown>` and this analyses all your markdown content and pulls it into your React component for you.

This means you can keep your article markdown in their own separate files, in a nicely organised folder structure, i.e.

```
posts
- how-i-created-this-website.md
- how-to-become-a-web-developer-in-2023.md
- what-is-vite-and-why-should-you-use-it-instead-of-create-react-app.md
```

## Styling the Markdown Code Snippets

So I'd decided to use Markdown, and it already provides great support for code snippets in that it will wrap your code in `<pre><code>` tags so they are semantically correct.

I then really wanted to make these look pretty, like I'd seen on the big daddy blog sites. You know the kind that has all the nice code formatting and syntax highlighting - as if you'd embedded an actual code editor in your page.

I managed to find a really great tool called [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) to work ths magic. I used it in conjunction with react-markdown to find all the `<code>` blocks created, and style them exactly as I wanted. You are given the choice of countless themes to use, much like you can change the colour scheme in your actual code editor.

## Blog Comments

This is something I definitely wanted to include if I could, as in my previous blog it was a nice way of actually seeing that there are real people reading your content and provides a way for them to interact with you and build a community of sorts.

The obvious contender was Disqus, but I wanted to avoid this if at all possible, for a couple of reasons.

1 I'm Cheap - You have to pay for Disqus. I'm not particularly averse to that a bit further down the line, but in the early days when just starting out I wanted to keep it cheap/free if possible.
2 I Value Performance - Everything I'd read about Disqus said it adds a lot of page weight, which can obviously affect page load speeds. I'd gone to a lot of effort to ensure the site was performant, so this was also a negative aspect that I wanted to avoid.

I found a really great commenting system called [Giscus](https://giscus.app/), which uses GitHub discussions to store any and all comments on the associated article. The slight downside is that for a user to login and comment, they need to have a GitHub account. In my case however, I made the call that this was not a problem as the vast majority of my readers would be developers anyway, and very likely to have a GitHub account for their code repositories.

## Where Do I Host My Files?

I'm actually using a service called [Railway](https://railway.app/) to host the site. You can have multiple projects, and add any number of services within each project that you might need - databases for example. In my case, it's relatively simple as my blog content is simply stored as markdown files within the GitHub repo, so no need for a database.

As a sidenote, I was using Heroku for all my projects before this but then they were about to change their pricing structure to make things a lot more expensive. Railway is the competitor I decided to switch to. [Fly.io](https://fly.io/) is another one I see very commonly recommended.

## Buying A Domain

It's all very well creating your project and writing all your content locally, but at some point you're going to want to share it with the world on a cool, fancy new domain name!

I've always bought my domains through [Namecheap](https://namecheap.pxf.io/9Wb0m5). The site is easy to navigate, they have a great selection and their customer service is great. I've had to call on them multiple times for random things over the years and they regularly provide me with a quick solution.

Whoever you decide to use, just [avoid GoDaddy like the plague!](https://www.reddit.com/r/webdev/comments/t8v6lp/do_yourself_a_favor_and_stay_away_from_godaddy/).

## Google Analytics and Google Search Console

## The Importance Of SEO

## Subscribers / Email List? Can't remmebr the name
