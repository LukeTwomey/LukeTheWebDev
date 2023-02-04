import Head from "next/head";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import fs from "fs";

const Project = ({ frontmatter, content }) => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description}></meta>
      </Head>
      <main className="project">
        <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
      </main>
    </div>
  );
};

export default Project;

export async function getStaticPaths() {
  const files = fs.readdirSync("projects");
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
  const fileName = fs.readFileSync(`projects/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
