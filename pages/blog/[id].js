import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import Giscus from "@giscus/react";
import matter from "gray-matter";
import BlogPreview from "../../components/BlogPreview";
import SignupForm from "../../components/SignupForm";
import fs from "fs";
import rangeParser from "parse-numeric-range";
import { DateTime } from "luxon";

const prettyDate = (date) =>
  DateTime.fromISO(date).setLocale("en-GB").toLocaleString(DateTime.DATE_FULL);

const Post = ({ id, frontmatter, content, otherPosts }) => {
  return (
    <div className="background">
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Anderson" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.preview}></meta>
        {/* Basic OpenGraph*/}
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.preview} />
        <meta property="og:url" content={`https://luketheweb.dev/blog/${id}`} />
        <meta
          property="og:image"
          content={`https://luketheweb.dev/images/${frontmatter.previewImage}.jpg`}
        />

        {/* Additional OpenGraph*/}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={frontmatter.date} />
        <meta property="article:author" content="Luke Anderson" />
        <meta property="og:site_name" content="Luke the Web Dev" />

        {/* Twitter OpenGraph*/}
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.preview} />
        <meta
          name="twitter:image"
          content={`https://luketheweb.dev/images/${frontmatter.previewImage}.jpg`}
        />
        <meta property="twitter:card" content="summary" />
        <meta name="twitter:site" content="@luke_the_webdev" />
        <meta name="twitter:creator" content="@luke_the_webdev" />
      </Head>
      <main
        className="blogPost"
        itemScope=""
        itemType="http://schema.org/BlogPosting"
      >
        <div className="content">
          <h1 itemProp="headline name">{frontmatter.title}</h1>
          <div className="postDetails">
            <Image
              src="/images/luke-anderson.webp"
              alt="Luke Anderson"
              width="40"
              height="40"
              priority
              className="authorImage"
            />
            <h4 className="authorName" itemProp="author">
              Luke Anderson
            </h4>
            <h4 className="publishedDate" itemProp="datePublished">
              {prettyDate(frontmatter.date)}
            </h4>
          </div>
          <Image
            src={`/images/${frontmatter.previewImage}.webp`}
            alt={frontmatter.title}
            width="358"
            height="170"
            style={{
              height: "auto",
              width: "100%",
            }}
            sizes="(max-width: 1200px) 100vw,
              70vw"
            priority
            className="featureImage"
            itemProp="image"
          />

          <article itemProp="articleBody">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              linkTarget="_blank"
              components={{
                code({ node, inline, className, children, ...props }) {
                  return !inline ? (
                    <SyntaxHighlighter
                      style={nord}
                      wrapLines={true}
                      language="javascript"
                      PreTag="div"
                      showLineNumbers={true}
                      useInlineStyles={true}
                      lineProps={(lineNumber) => {
                        const hasMeta = node?.data?.meta;
                        if (hasMeta) {
                          const RE = /{([\d,-]+)}/;
                          const metadata = node.data.meta?.replace(/\s/g, "");
                          const strlineNumbers = RE?.test(metadata)
                            ? RE?.exec(metadata)[1]
                            : "0";
                          const highlightLines = rangeParser(strlineNumbers);
                          const highlight = highlightLines;
                          const data = highlight.includes(lineNumber)
                            ? "highlight"
                            : null;
                          return { data };
                        } else {
                          return {};
                        }
                      }}
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
                    <SignupForm
                      message="If you're enjoying the read, please consider signing up to my newsletter to receive notifications when new posts are added!"
                      location="middleOfPost"
                    />
                  );
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

          <SignupForm
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
            inputPosition="bottom"
            theme="https://lukethewebdev.api.up.railway.app/giscusCss"
            lang="en"
            loading="lazy"
            key={frontmatter.title}
          />

          <section className="previews">
            <BlogPreview posts={otherPosts} theme="light" />
          </section>
        </div>
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
    const beforeDate = DateTime.fromFormat(a.data.date, "yyyy-MM-dd");
    const afterDate = DateTime.fromFormat(b.data.date, "yyyy-MM-dd");
    return afterDate - beforeDate;
  });

  const otherPosts = posts.filter((post) => post.slug !== id);

  const fileName = fs.readFileSync(`posts/${id}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      id,
      frontmatter,
      content,
      otherPosts,
    },
  };
}
