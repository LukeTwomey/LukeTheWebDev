import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import matter from "gray-matter";
import fs from "fs";
import { DateTime } from "luxon";

const prettyDate = (date) =>
  DateTime.fromISO(date).setLocale("en-GB").toLocaleString(DateTime.DATE_FULL);

export const Blog = ({ posts }) => {
  const sortBlogPostsByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.data.date, "yyyy-m-d");
    const afterDate = DateTime.fromFormat(b.data.date, "yyyy-m-d");
    return afterDate - beforeDate;
  });

  return (
    <main className={styles.blog}>
      <h1>Blog</h1>
      <p>
        Welcome to my blog! I'll be covering a range of development topics here,
        at various different experience levels. You can filter using the toggles
        below.
      </p>
      <p></p>
      <section className={styles.posts}>
        {sortBlogPostsByDate.map((post) => (
          <article className={styles.post} key={post.data.title}>
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
      </section>
    </main>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const filecontent = fs.readFileSync(`posts/${file}`, "utf-8");
    const parsedContent = matter(filecontent);
    const { data } = parsedContent;
    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
