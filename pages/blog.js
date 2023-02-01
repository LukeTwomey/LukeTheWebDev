import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import matter from "gray-matter";
import fs from "fs";
import { DateTime } from "Luxon";

const scrollToTop = () => {
  // window.scrollTo(0, 0);
};

export const Blog = ({ posts }) => {
  console.log(posts);

  const sortBlogPostsByDate = posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.data.date, "m-d-yyyy");
    const afterDate = DateTime.fromFormat(b.data.date, "m-d-yyyy");
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
              <Link href={`/blog/${post.slug}`} onClick={scrollToTop}>
                <h3>{post.data.title}</h3>
              </Link>
              <h4>{post.data.date}</h4>
              <p>{post.data.preview}</p>
              <Link href={`/blog/${post.slug}`} onClick={scrollToTop}>
                Read post
              </Link>
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
