import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";

const prettyDate = (date) =>
  DateTime.fromISO(date).setLocale("en-GB").toLocaleString(DateTime.DATE_FULL);

export const BlogPreview = ({ posts, theme }) => {
  return (
    <>
      {posts.map((post) => (
        <article className={`post ${theme}`} key={post.slug}>
          <Image
            src={`/images/${post.data.previewImage}`}
            alt={post.data.title}
            width="358"
            height="170"
            className="full-width"
            priority
          />
          <div className="preview">
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.data.title}</h3>
            </Link>
            <div className="postDetails">
              <Image
                src="/images/luke-twomey.webp"
                alt="Luke Twomey"
                width="40"
                height="40"
                priority
                className="postAuthor"
              />
              <h4>{prettyDate(post.data.date)}</h4>
            </div>
            <p>{post.data.preview}</p>
            <Link href={`/blog/${post.slug}`}>Read post</Link>
          </div>
        </article>
      ))}
    </>
  );
};

export default BlogPreview;
