import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import fs from "fs";

const Project = ({ content }) => {
  return (
    <main className="project">
      <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
    </main>
  );
};

export default Project;

export async function getStaticPaths() {
  // Get all the paths from slugs or file names
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
  //   const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
  // const { data: frontmatter, content } = matter(fileName);
  const content = fs.readFileSync(`projects/${id}.md`, "utf-8");
  return {
    //   props: {
    //     frontmatter,
    //     content,
    //   },
    props: {
      content,
    },
  };
}
