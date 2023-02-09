import Head from "next/head";
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
    const beforeDate = DateTime.fromFormat(a.data.date, "yyyy-MM-dd");
    const afterDate = DateTime.fromFormat(b.data.date, "yyyy-MM-dd");
    return afterDate - beforeDate;
  });

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Web Development Blog | Luke the Web Dev</title>
        <meta
          name="description"
          content="Welcome to Luke the Web Dev blog! Here I'll share my top tips and general ramblings on all things web development. Join me and we can learn cool stuff together! "
        ></meta>
      </Head>

      <main
        className={styles.blog}
        itemScope=""
        itemType="http://schema.org/Blog"
      >
        <h1>Blog</h1>
        <h2 itemProp="about">Welcome! Let's learn cool stuff together</h2>
        <p></p>
        <section className={styles.posts}>
          {sortBlogPostsByDate.map((post) => (
            <article
              className={styles.post}
              key={post.data.title}
              itemScope=""
              itemType="http://schema.org/BlogPosting"
            >
              <Image
                src={`/images/${post.data.previewImage}`}
                alt={post.data.title}
                width="358"
                height="170"
                className="full-width"
                priority
                itemProp="image"
              />
              <div className="preview">
                <Link href={`/blog/${post.slug}`}>
                  <h3 itemProp="headline name">{post.data.title}</h3>
                </Link>
                <div className="postDetails">
                  <Image
                    src="/images/luke-twomey.webp"
                    alt="Luke Twomey"
                    width="40"
                    height="40"
                    priority
                    className="authorImage"
                  />
                  <h4 className="authorName" itemProp="author">
                    Luke Twomey
                  </h4>
                  <h4 className="publishedDate" itemProp="datePublished">
                    {prettyDate(post.data.date)}
                  </h4>
                </div>
                <p itempro="description">{post.data.preview}</p>
                <Link href={`/blog/${post.slug}`} itemProp="url">
                  Read post
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
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
