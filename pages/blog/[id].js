import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import Giscus from "@giscus/react";
import matter from "gray-matter";
import BlogPreview from "../../components/BlogPreview";
import Signup from "../../components/Signup";
import fs from "fs";
import { DateTime } from "luxon";

const prettyDate = (date) =>
  DateTime.fromISO(date).setLocale("en-GB").toLocaleString(DateTime.DATE_FULL);

const Post = ({ frontmatter, content, otherPosts }) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{frontmatter.title}</title>
        <meta name="description" content="Here's my great about page!"></meta>
      </Head>
      <main className="blogPost">
        <h1>{frontmatter.title}</h1>
        <div className="postDetails">
          <Image
            src="/images/luke-twomey.webp"
            alt="Luke Twomey"
            width="40"
            height="40"
            priority
            className="postAuthor"
          />
          <h4>{prettyDate(frontmatter.date)}</h4>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          linkTarget="_blank"
          components={{
            code({ node, inline, className, children, ...props }) {
              return !inline ? (
                <SyntaxHighlighter
                  style={nord}
                  language="javascript"
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="md-post-code" {...props}>
                  {children}
                </code>
              );
            },
            h6({ node, inline, className, children, ...props }) {
              return (
                <Signup
                  message="If you're enjoying the read, please consider signing up to my newsletter to receive notifications when new posts are added!"
                  location="middleOfPost"
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>

        <Signup
          message="If you enjoyed the read, please consider signing up to my newsletter to receive notifications when new posts are added!"
          location="endOfPost"
        />

        <Giscus
          id="giscusComments"
          repo="LukeTwomey/LukeTheWebDev"
          repoId="R_kgDOI2bJWw"
          category="Announcements"
          categoryId="DIC_kwDOI2bJW84CT4Cv"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="https://lukethewebdev.api.up.railway.app/giscusCss"
          lang="en"
          loading="lazy"
          key={frontmatter.title}
        />

        <BlogPreview posts={otherPosts} theme="light" />
      </main>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  // Get all the paths from slugs or file names
  const files = fs.readdirSync("posts");
  const paths = files.map((files) => ({
    params: {
      id: files.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const files = fs.readdirSync("posts");

  let posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const filecontent = fs.readFileSync(`posts/${file}`, "utf-8");
    const parsedContent = matter(filecontent);
    const { data } = parsedContent;
    return {
      slug,
      data,
    };
  });

  posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.data.date, "yyyy-m-d");
    const afterDate = DateTime.fromFormat(b.data.date, "yyyy-m-d");
    return afterDate - beforeDate;
  });

  const otherPosts = posts.filter((post) => post.slug !== id);

  const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
      otherPosts,
    },
  };
}
