---
title: "How Will the Future of Web Development Be Affected by Influential New React Docs?"
date: "2023-03-25"
feature: "true"
previewImage: "react"
preview: "The new 2023 React docs are strongly biased in favour of frameworks, what impact will that have on the future of web dev?"
---

The [new React docs](https://react.dev/learn) have finally landed, on a brand new React.dev domain.

The official documentation has long been a great place for beginners to start when it comes to learning React. However, some of the approaches used in the new docs have caused quite a stir amongst the community.

They now [recommend using a React-powered framework](https://react.dev/learn/start-a-new-react-project#:~:text=If%20you%20want%20to%20build%20a%20new%20app%20or%20a%20new%20website%20fully%20with%20React%2C%20we%20recommend%20picking%20one%20of%20the%20React%2Dpowered%20frameworks%20popular%20in%20the%20community) like Next.js or Remix when first starting a project, and the old way of creating a project without a framework has been cast out like a leper to a drop-down section further down the page.

![Non-framework React project](../images/non-framework.webp "inline")

The implications of what this means for the future of web development is fascinating. The official docs are such a popular resource, for good reason. The influence they will have on the community - particularly less experienced devs who will follow the instructions to the letter - will surely see a massive increase in the use of frameworks across new projects.

## When Were the New React Docs Released?

The new React docs were [released on 16 March 2023](https://react.dev/blog/2023/03/16/introducing-react-dev).

They were actually first published in beta form in October 2021, and primarily focused on using Hooks and functional components. This is quite a lengthy time for them to have been hanging around in limbo, but they have now finally been officially launched and it's fair to say the reaction is mixed.

The original docs have been downgraded to legacy but are [still available](https://legacy.reactjs.org/) for reference.

![Introducing React.dev](../images/react-dev.webp "inline")

## How Are the New React Docs Different to the Old Ones?

As with most things in the world of front end development, things never stand still for long and React has steadily evolved over time.

### Hooks and useState

React components can be written in two different ways, class components or functional components.

Originally if you needed to store state in your component, your only option was to use the "stateful" class option. The shorter, simpler functional components were unable to handle this scenario.

All that changed with the advent of Hooks and `useState` in React 16.8. They changed the game in that they now allowed state to be stored in functional components as well, making them the preferred choice over their longer and more complex to read counterparts. This drive towards functional components saw the old class components demoted to legacy, with the commonly termed "Modern React" prevailing and becoming the standard way of writing your components.

The original docs were still very much class component focused, as it is a common requirement to be able to store state in your applications. The majority of the code examples show the class based option as this was the go to solution at the time.

![Hooks](../images/hooks.webp "inline")

As great as the documentation is in terms of explaining React and providing useful examples for new users to follow, this disparity between the modern way of writing components and the older examples provided in the docs was definitely a potential source of confusion. Frustratingly, people just starting out with learning React couldn't really be pointed to the (otherwise excellent) official documentation because they would demonstrate an outdated way of writing React.

When they read the newer beta docs, the common question arose "This says beta, are you sure this is right?!". Understandably, it wasn't immediately obvious that this was the correct resource to be using, especially when considering these are the official docs and you expect them to be correct and up to date. The new docs seek to address that problem.

### Create React App Has Been Cast Aside

Create React App has long been the go-to tool to get your new React project started. It provided a convenient way to quickly create everything your application would need - dev server, linting, hot reloading development environment, transpiling and bundling for production.

In recent times, it has started to look less attractive [when compared to Vite](/blog/what-is-vite-and-why-should-you-use-it-instead-of-create-react-app), which is ever growing in popularity due to the speed benefits it provides.

The new docs have likewise moved away from Create React App, making no mention of their once beloved tool. However rather than favouring Vite as their method of choice, they extoll the virtues of using frameworks to build your new application.

Dan Abramov has advised that the plan for Create React App is to simply [use it as a launcher](https://www.reddit.com/r/reactjs/comments/11u1r3w/comment/jcmimez/?utm_source=share&utm_medium=web2x&context=3) for the actual recommended framework solution. So it sounds like it will still be around, just unmaintained and not actively developed or promoted.

![Dustbin](../images/dustbin.webp "inline")

### The Necessity of useEffect Has Been Questioned

A very popular addition seems to be a section [questioning the use (or overuse?) of useEffect](https://react.dev/learn/you-might-not-need-an-effect) in React components.

Apparently it is common to see `useEffect` used extensively and often in situations where it might not actually be necessary, and its use actually just makes your code both harder to read and slower to execute.

This section of the docs gives comprehensive examples of common situations where useEffect is employed, but can actually be written in an alternative, more performant way.

### Frameworks Are the New Golden Child

> Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.

It's argued in the documentation that although your React project may not need everything a framework provides from the outset, it's likely that you will need these things at some point in the future. The use of a framework makes it easy to add these new features as and when you require them.

In contrast, if you pave your own way by creating a project using Vite, you will be the one responsible for adding additional libraries to cover some of the functionality you may require in future. According to the docs, this can slow down your app and can be tricky to get things working in perfect harmony.

![Framework](../images/framework.webp "inline")

The frameworks that are recommended are Next.js, Remix, Gatsby and Expo. Personally I can certainly see the benefits of using a framework, indeed this very site is created with Next.js. I had originally created the site using Create React App, but I encountered limitations when considering on page SEO and ensuring Google had things like meta descriptions and titles immediately available when crawling the site.

The React.dev site itself is also now [written in Next and Tailwind](https://www.reddit.com/r/reactjs/comments/11t3a63/comment/jci9h23/), so they're clearly backing that horse too.

######

## What Has the Reception Been Like?

The docs are clearly now very opinionated on the best way to start a new React project. I mean, just reading the "Can I use React without a framework?" section it's clear they really, _really_ think you should probably use a framework.

> You can definitely use React without a framework. However, if you’re building a new app or a site fully with React, we recommend using a framework. If you’d like to roll your own custom setup, we can’t stop you—go for it!

### SSR (Server Side Rendering)

By the docs pushing frameworks so heavily, the implication seems to be that SSR (Server Side Rendering) is the preferred option for your new applications. This is certainly how the majority of devs seem to perceive this anyway, from the reactions I've seen.

There seems to be a couple of arguments against promoting this as "the way".

#### Harder For Beginners

For beginners just dipping their toes into the world of React, to immediately dive into the server side waters feels like quite an intimidating ask.

The great thing about Create React App was its relative simplicity, and ease of use for anyone to quickly get started with a React app. To have to use frameworks and server side rendering adds complexity that can be seen as a barrier to entry, and adds extra complication to those who are just starting out.

I honestly find it more confusing myself so I can imagine it would be intimidating for beginners and definitely could put some people off.

![Confused developer](../images/confusion.webp "inline")

#### Unnecessary Complexity

Lots of comments along the lines of "I just need a simple, client side app without all the bloat and complications of a server". The argument seems to be that there are many situations where all the extra things a framework provides and the addition of a server are unnecessary in the vast majority of cases.

A simple, client side app is often enough, and there's no need for all these server rendering shenanigans confusing matters!

### Client-Side SPA's

So on that note, have client side single page apps been kicked to the kerb? The [React team argues that they haven't](https://www.reddit.com/r/reactjs/comments/11t3a63/comment/jckfbne/?utm_source=share&utm_medium=web2x&context=3).

Dan Abramov counters that although, yes, they are pushing frameworks as the default way to create your new React applications, server side rendering is not the only way.

> Almost all of these frameworks let you produce fully client-side apps. Almost all of them do not require a Node.js server.

He states that they still recommend frameworks for all the reasons covered in this article, but not necessarily server side rendering. It is [still possible to create just client side apps](https://www.reddit.com/r/reactjs/comments/11u1r3w/comment/jcmdpsc/?utm_source=share&utm_medium=web2x&context=3), even with those frameworks.

You still have the option when using these frameworks to opt not to server side render, and this is being emphasised by the React team to try and help the spread of misinformation.

## What Do the New Docs Tell Us About the Future of Web Development?

The recommendation to use a framework is bound to have a huge impact on how new React applications are created in future.

Rather than taking the time to investigate the frameworks too deeply, it is likely that people will go with the default option which will go full fat and set them up with all the server side delights they can handle.

As we've seen, it is possible to create pure client-side apps using these frameworks, but this definitely is not common knowledge and the React team are taking some flak as a result.

![Client-side still possible with Next.js](../images/client-side.webp "inline")

They are being very vocal in disputing this opinion, so I expect we could see something official released to attempt to allay people's fears. Possibly even a slight update to the documentation to clarify this point.

I don't believe React will become any less popular as a result, it is still the go to library of choice and continues to remain in prime position in many developer's hearts and minds, including my own.

We will now likely see an even bigger surge in the popularity of these frameworks, now they are used by React themselves (Next.js on their React.dev site) and promoted in their official documentation.

Certainly we will see more and more apps created with server side rendering and all of the additional features (routing etc) built in from the outset.

## Summary

The official React documentation is a great resource, and this debate should take nothing away from that. The new docs have been eagerly awaited, and it is a great benefit to have them now officially launched and out of beta.

This will help many people, both those who are just starting out with learning React, and those who are more experienced and just using it as a reference.

The controversy surrounding the framework recommendation has sparked a lot of conversation and it will be very interesting to see how things evolve from this point on.
