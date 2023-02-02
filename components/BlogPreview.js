import Link from "next/link";
import Image from "next/image";

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
            priority
          />
          <div className="preview">
            <Link href={`blog/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <h4>{post.dateCreated}</h4>
            <p>{post.preview}</p>
            <Link href={`blog/${post.id}`}>Read post</Link>
          </div>
        </article>
      ))}

      <Link href="/blog" className="button">
        View Blog
      </Link>
    </section>
  );
};

export default BlogPreview;
