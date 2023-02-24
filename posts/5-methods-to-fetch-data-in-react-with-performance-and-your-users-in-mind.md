---
title: "5 Methods to Fetch Data in React, With Performance and Your Users in Mind"
date: "2023-02-24"
feature: "true"
previewImage: "data.webp"
preview: "There are many different ways to fetch data in React, with important factors to take into consideration. I discuss them in more detail here."
---

In the majority of cases, your app will require input from external sources. For example, in a blog such as this, you may need to retrieve your posts from a database. In a weather app, you'll need to reach out to an API to retrieve the current climatic conditions in a particular area. A concert booking app will need to check which seats are still available for a given event and so on.

What may seem like a simple task on the face of it, can quickly become quite complex. There are important factors to take into consideration, not least the impact your data fetching has on your number one priority - ~~Keanu Reeves~~ your users.

## 1 - Fetch With Async/Await

From personal experience reading articles like this, I know that I often just want to quickly see the best solution, in it's entirety. With that in mind, I'll first provide a complete, working component below:

**Fear not! I'll explain _every single_ part of this component separately and go into far more detail on this whole subject in the rest of the post.**

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

This implementation is what I believe is currently the best option for fetching data in your application.

In this component, I am retrieving a list of blog posts to display on the page.

Let's break it down step by step.

```js
import { useState, useEffect } from "react";
```

It's one thing fetching your data, but what do you do with it once you've got it? In this line, we import [useState](https://reactjs.org/docs/hooks-state.html) from React. This hook is what we will use to store our fetched data.

We also import [useEffect](https://reactjs.org/docs/hooks-effect.html). This hook lets us perform side effects in function components. A side effect is something that can generate different outcomes (e.g. a success or failure of a data fetch). It is what we will use to actually fetch our posts.

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

The [`useEffect`](https://reactjs.org/docs/hooks-effect.html) hook is the place where we will actually be fetching our data. As mentioned before, it allows us to manage side-effects in our functional components. These can include things like data fetching, manipulating the DOM, using timer functions etc. It is important that we do not perform these types of actions in the function body, but inside `useEffect`.

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

Dan Abramov himself has highlighted this as [one of the issues faced when fetching data](https://www.reddit.com/r/reactjs/comments/vi6q6f/comment/iddrjue), and you will be avoiding potential bugs by using this method.

### Data Fetching Race Conditions Explained

Imagine a situation where you have a component which has rendered once, and fires off a fetch request to get data for your app. Before it has time to return, the component is re-rendered and another fetch request is made. You now have 2 fetch requests, potentially returning different data.

######

You always want to use the most recent, so it would cause a problem if for some reason the _first_ request came back last, and stored old data in your app.

To prevent this, we use the useEffect cleanup function to set the `ignore` flag to true. This will happen when the component re-renders. The first version of it will be cleared down (and have its `ignore` flag set to true), and the newly rendered component will have a new `ignore` flag of its own created.

When the first request comes back, because `ignore` is now set to `false` (by the cleanup function), it will not call `setPosts(data)`.

When the second request comes back, because `ignore` for that version is set to `true`, it will be allowed to add the data to state.

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
  ...
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

In the below screenshot, on the right you can see what the data looks like in the Network tab in devtools, and on the left how that data gets displayed on the page once we've returned it from our component:

![Fetched data](../images/fetched-data.webp "inline")

// takes into account race conditions by using the "ignore" flag - https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data
// provides loading information to user
// provides error information to user
