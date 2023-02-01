import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import Giscus from "@giscus/react";
import matter from "gray-matter";
import Signup from "../../components/Signup";
import fs from "fs";

const Post = ({ frontmatter, content }) => {
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
          id="comments"
          repo="LukeTwomey/LukeTheWebDev"
          repoId="R_kgDOI2bJWw"
          category="Announcements"
          categoryId="DIC_kwDOI2bJW84CT4Cv"
          mapping="title"
          term="Welcome to @giscus/react component!"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="https://lukethewebdev.api.up.railway.app/giscusCss"
          lang="en"
          loading="lazy"
        />
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
  const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  // console.log(matter(fileName));
  // const content = fs.readFileSync(`posts/${id}.md`, "utf-8");
  return {
    props: {
      frontmatter,
      content,
    },
    // props: {
    //   content,
    // },
  };
}
