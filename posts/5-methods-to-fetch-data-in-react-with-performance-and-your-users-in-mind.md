---
title: "5 Methods to Fetch Data in React, With Performance and Your Users in Mind"
date: "2023-02-25"
feature: "true"
previewImage: "data.webp"
preview: "There are many different ways to fetch data in React, with important factors to take into consideration. I discuss them in more detail here."
---

In the majority of cases, your app will require input from external sources. For example, in a blog such as this, you may need to retrieve your posts from a database. In a weather app, you'll need to reach out to an API to retrieve the current climatic conditions in a particular area. A concert booking app will need to check which seats are still available for a given event and so on.

What may seem like a simple task on the face of it, can quickly become quite complex. There are important factors to take into consideration, not least the impact your data fetching has on your number one priority - ~~Keanu Reeves~~ your users.

## 1 - Fetch With Async/Await

This implementation is what I believe is currently the best option for fetching data in your application.

From personal experience reading articles like this, I know that I often just want to quickly see the solution, in it's entirety. With that in mind, I'll first provide a complete, working component for you to use.

**Fear not! I'll explain every part of this component in more detail below.**

```js
import { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=10`
        );
        const data = await response.json();

        if (!ignore) {
          setPosts(data);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        setposts(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="posts">
      {loading && <h4>Loading posts...</h4>}
      {error && <h4>{`There is a problem loading the posts - ${error}`}</h4>}
      {posts && posts.map((post) => <h4 key={post.id}>{post.title}</h4>)}
    </div>
  );
};

export default App;
```

In this component, I am retrieving a list of blog posts to display on the page.

Let's break it down step by step.

```js
import { useState, useEffect } from "react";
```

It's one thing fetching your data, but what do you do with it once you've got it? In this line, we import [useState](https://reactjs.org/docs/hooks-state.html) from React. This hook is what we will use to store our fetched data.

We also import [useEffect](https://reactjs.org/docs/hooks-effect.html). This hook lets us perform side-effects in function components. A side effect is something that can generate different outcomes (e.g. a success or failure of a data fetch). It is what we will use to actually fetch our posts.

```js
const [posts, setPosts] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Here we are creating three new variables in state.

- `posts` will simply hold the list of posts that we fetch. We initialise this to `null`, as we have no posts to start with. `setPosts` is the method we will use to update this variable in state.
- `loading` will be used as a flag to determine whether or not we are currently fetching data. It is good practice to do this so we can keep our user informed about what the app is doing. We initialise this to `true`, as we will immediately be loading the data when the app starts.
- `error` will also be used as a flag to help us inform the user of the current state of the app. If anything goes wrong with our data fetching, we can use this flag to advise the user what's happened.

```js
useEffect(() => {
  ...
}, []);
```

The [`useEffect`](https://reactjs.org/docs/hooks-effect.html) hook is the place where we will actually be fetching our data. It allows us to manage side-effects in our functional components. These can include things like data fetching, manipulating the DOM, using timer functions etc. It is important that we do not perform these types of actions in the function body, but inside `useEffect`.

It accepts two arguments. The first is a callback (which is where we fetch our data). The second is an optional array of dependencies. `useEffect` will only execute the callback if the dependencies specified in the array have changed between renders. By using an empty array like we have here, the callback will execute only once, when first rendered.

![Server rack](../images/data2.webp "inline")

```js {2,7-11,17-20}
useEffect(() => {
  let ignore = false;

  const fetchPosts = async () => {
    try {
      ...
      // only update state if you should not ignore the response
      if (!ignore) {
        setPosts(data);
        setError(null);
      }
    } ...
  };

  fetchPosts();

  // useEffect cleanup function
  return () => {
    ignore = true;
  };
}, []);
```

The highlighted lines are something you may not see in other articles on this subject. I am including them here because they are a very useful addition to help [prevent race conditions](https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data).

Dan Abramov himself has [highlighted this](https://www.reddit.com/r/reactjs/comments/vi6q6f/comment/iddrjue) as one of the issues faced when fetching data, and you will be avoiding potential bugs by using this method.

### Data Fetching Race Conditions Explained

Imagine a situation where you have a component which has rendered once, and fires off a fetch request to get data for your app. Before the request completes, the component is re-rendered and another request is made. You now have two requests, potentially returning different data, and no idea which one will complete first.

######

To prevent this, we use the useEffect cleanup function, which is called before executing the next effect.

When the old effect is cleaned up, we set the `ignore` flag to `true`. This ensures that when the first request returns with stale data, it does not update state.

When the second request returns with the most recent data, because `ignore` for that version is set to `true`, it will be allowed to add the data to state.

### Abortcontroller - Another Solution to Race Conditions

I wanted to just include this as another option for preventing race conditions, which you can use if you do not need to support Internet Explorer. I won't go into detail on it here, to avoid bloating this section, but [here is a useful post](https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect#:~:text=useEffect%20Clean%2Dup%20Function%20with%20AbortController) providing details on how to use it.

```js
const fetchPosts = async () => {
  ...
};

fetchPosts();
```

Here we create a `fetchPosts` function which will be what we use to actually make the fetch request.

Once it's defined, we call it using `fetchPosts()`.

```js
try {
  // fetch data here
} catch (err) {
  setError(err.message);
  setposts(null);
} finally {
  setLoading(false);
}
```

We wrap our fetch inside a try catch. This will ensure that if we encounter a network error, we handle this gracefully. In this case, we grab the error message and use `setError` to add it to our error state variable.

When we finish everything, in the `finally` block we set our loading status to `false`.

```js
const fetchPosts = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    const data = await response.json();
    ...
  }
};
```

And finally the sweet cheery on top, the actual data request! [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is a native JavaScript API which allows you to fetch a resource from a network. Exactly what we require.

We pass in the resource we want to fetch (in this case a url from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)).

Because our request is asynchronous, we use the [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) syntax to wait for the data to be returned before continuing.

We then read the data from our response using `response.json()`.

```js {5}
return (
  <div className="posts">
    {loading && <h4>Loading posts...</h4>}
    {error && <h4>{`There is a problem loading the posts - ${error}`}</h4>}
    {posts && posts.map((post) => <h4 key={post.id}>{post.title}</h4>)}
  </div>
);
```

Once we have retrieved our posts data (as an array), and saved it into state, we can `map` over it to display the data on screen.

In the below screenshot, on the right you can see what the data looks like in the API response on the Network tab in devtools, and on the left how that data gets displayed on the page once we've returned it from our component:

![Fetched data](../images/fetched-data.webp "inline")

The user will also see pertinent information regarding the status of the app, because of how we are handling our `loading` and `error` flags.

When we are making our request:

![Data loading](../images/data-loading.webp "inline")

If there is a network error and the request fails:

![Network error](../images/network-error.webp "inline")

## 2 - Fetch With Promise Chaining

This method is very similar to the first, in that it uses fetch. The difference is it uses promise chaining rather than async/await to handle the response from the request. Async/await is the newer method of the two, and what you will probably now encounter more frequently, which is why I put it in the number one spot.

```js
const fetchPosts = () => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
    .then((response) => response.json())
    .then((data) => console.log(data))
  } ...
};
```

Notice that `async` and `await` have been removed. Rather than `await` our response, we handle the response promise with `.then`. We still need to run `json()` on the initial response, so we chain on another `.then` to handle that, and then finally get our actual data.

## 3 - Axios Library

Axios is a promise-based library which allows you to make requests, just like we've been doing with Fetch. While it has the downside of adding an extra dependency to your app, it can simplify our code ever so slightly.

```js {1, 6-8}
import axios from "axios";

...
const fetchPosts = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    ...
};
...
```

Note that we now need to import the axios library at the top of our component, and this time we wait for `axios.get` instead of `fetch`.

You'll also notice that we no longer need to call `json()` on our response, as Axios automatically does this for us behind the scenes.

![Using computer](../images/data-fetch.webp "inline")

## 4 - useFetch Custom React Hook

The `useFetch` hook comes from the `react-fetch-hook` library, which you will need to install before using.

```js
yarn add react-fetch-hook
```

This method allows us to remove the `useEffect` hook, as that is abstracted out into the `useFetch` custom hook for us.

```js {1, 4-6}
import useFetch from "react-fetch-hook";

export default function App() {
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  return (
    ...
  );
}
```

As before, we pass in the resource we want to fetch. We destructure the `isLoading`, `data` and `error` state, which we can use in our render as we did in the first example.

## 5 - React Query

[React Query](https://tanstack.com/query/v4/docs/react/overview) is a data fetching library we can use, but it provides a lot more functionality than just what we have been looking at in this article. It allows for fetching, caching, synchronizing and updating server state.

To use it, we need to install the `react-query` library:

```js
yarn add react-query
```

We then need to wrap our parent component with a QueryClientProvider imported from react-query, passing a newly created client instance to it:

```js
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
```

Once that initial configuration has been made, we can use it within our component:

```js
import { useQuery } from "react-query";

export default function App() {
  const { isLoading, error, data } = useQuery("posts", () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10`
    );
    const data = await response.json();
    return data;
  });

  return (
    ...
  );
}
```

Here we are calling `useQuery` with two arguments. The first is something that uniquely identifies the query (here we are specifying posts, as that is what we will be fetching). The second is a function that will make our request (using e.g. Fetch, or Axios).

## Summary

An application will need to fetch data for all manner of different uses. As a user you will seldom encounter an app or website which is not fetching data in some way, as it is such a fundamental part of modern interfaces.

In this article we covered five different methods for fetching data in your React aplication. We discussed each line of my favoured method in detail, explaining how you can ensure your app performs optimally, whilst providing your users with the best experience possible.

We do this by preventing race conditions, so the user does not ever encounter bugs whereby they may see stale, or unexpected data.

We use loading and error states, as a way for you to keep your user informed of what your app is doing, so they never encounter a situation where they are left wondering, or viewing a system error that should be getting handled by your code.

Which data fetching method do you prefer, and why? Let me know in the comments below, or if you need any help with anything I've covered, ask away!
