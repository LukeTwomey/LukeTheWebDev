import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import fs from "fs";

const Post = ({ content }) => {
  return (
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
          //   h6({ node, inline, className, children, ...props }) {
          //     return (
          //       <Signup message="If you're enjoying the read, please consider signing up to my newsletter to receive notifications when new posts are added!" />
          //     );
          //   },
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
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
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  //   const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
  // const { data: frontmatter, content } = matter(fileName);
  const content = fs.readFileSync(`posts/${id}.md`, "utf-8");
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
