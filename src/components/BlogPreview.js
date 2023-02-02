import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFeaturePosts } from "../api";

export const BlogPreview = () => {
  const [posts, setState] = useState([]);

  useEffect(() => {
    getFeaturePosts().then((posts) => setState(posts));
  }, []);

  return (
    <section className="blogPreview grey">
      <h2>Blog</h2>

      {posts.map((post) => (
        <article className="post" key={post.id}>
          <img
            className="full-width"
            src={post.previewImage}
            alt={post.title}
          />
          <div className="preview">
            <Link to={`blog/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <h4>{post.dateCreated}</h4>
            <p>{post.preview}</p>
            <Link to={`blog/${post.id}`}>Read post</Link>
          </div>
        </article>
      ))}

      <Link to="blog" className="button">
        View Blog
      </Link>
    </section>
  );
};
