import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api";
import "./Blog.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export async function loader() {
  return getPosts();
}

export const Blog = () => {
  const posts = useLoaderData();

  return (
    <main className="blog">
      <h1>Blog</h1>
      <p>
        Welcome to my blog! I'll be covering a range of development topics here,
        at various different experience levels. You can filter using the toggles
        below.
      </p>
      <p></p>
      <section className="posts">
        {posts.map((post) => (
          <article className="post" key={post.id}>
            <img
              className="full-width"
              src={post.previewImage}
              alt={post.title}
            />
            <div className="preview">
              <Link to={`${post.id}`} onClick={scrollToTop}>
                <h3>{post.title}</h3>
              </Link>
              <h4>{post.dateCreated}</h4>
              <p>{post.preview}</p>
              <Link to={`${post.id}`} onClick={scrollToTop}>
                Read post
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};
