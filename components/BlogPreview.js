import { useState, useEffect } from "react";
import Image from "next/image";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const BlogPreview = ({ posts }) => {
  return (
    <section className="blogPreview grey">
      <h2>Blog</h2>

      {posts.map((post) => (
        <article className="post" key={post.id}>
          <Image
            src={`/images/${post.previewImage}`}
            alt={post.title}
            width="358"
            height="170"
            className="full-width"
          />
          <div className="preview">
            {/* <Link to={`blog/${post.id}`} onClick={scrollToTop}> */}
            <h3>{post.title}</h3>
            {/* </Link> */}
            <h4>{post.dateCreated}</h4>
            <p>{post.preview}</p>
            {/* <Link to={`blog/${post.id}`} onClick={scrollToTop}> */}
            Read post
            {/* </Link> */}
          </div>
        </article>
      ))}
      {/* 
      <Link to="blog" className="button" onClick={scrollToTop}>
        View Blog
      </Link> */}
    </section>
  );
};

export default BlogPreview;