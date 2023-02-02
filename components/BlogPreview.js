import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";

const prettyDate = (date) =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL);

export const BlogPreview = ({ posts }) => {
  return (
    <section className="blogPreview grey">
      <h2>Blog</h2>

      {posts.map((post) => (
        <article className="post" key={post.slug}>
          <Image
            src={`/images/${post.data.previewImage}`}
            alt={post.data.title}
            width="358"
            height="170"
            className="full-width"
            priority
          />
          <div className="preview">
            <Link href={`blog/${post.slug}`}>
              <h3>{post.data.title}</h3>
            </Link>
            <h4>{prettyDate(post.data.date)}</h4>
            <p>{post.data.preview}</p>
            <Link href={`blog/${post.slug}`}>Read post</Link>
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
