import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as blogLoader } from "./components/Blog";
import { loader as postLoader } from "./components/BlogPost";
import { loader as projectLoader } from "./components/Project";
import { App } from "./App";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { BlogPost } from "./components/BlogPost";
import { Projects } from "./components/Projects";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
        loader: blogLoader,
      },
      {
        path: "blog/:postId",
        element: <BlogPost />,
        loader: postLoader,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:projectName",
        element: <Project />,
        loader: projectLoader,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
