import React from "react";
import { useLoaderData } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import { Signup } from "./Signup";
import "./BlogPost.css";

export async function loader({ params }) {
  return import(`../posts/${params.postId}.md`)
    .then((res) => fetch(res.default))
    .then((res) => res.text())
    .then((res) => {
      return res;
    });
}

export const BlogPost = () => {
  const post = useLoaderData();

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
          h6({ node, inline, className, children, ...props }) {
            return (
              <Signup message="If you're enjoying the read, please consider signing up to my newsletter to receive notifications when new posts are added!" />
            );
          },
        }}
      >
        {post}
      </ReactMarkdown>
    </main>
  );
};
