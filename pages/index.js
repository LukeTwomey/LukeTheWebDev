import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import BlogPreview from "../components/BlogPreview";
import SignupForm from "../components/SignupForm";
import matter from "gray-matter";
import fs from "fs";
import { DateTime } from "luxon";

export const App = ({ featurePosts }) => {
  const sortBlogPostsByDate = featurePosts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.data.date, "yyyy-MM-dd");
    const afterDate = DateTime.fromFormat(b.data.date, "yyyy-MM-dd");
    return afterDate - beforeDate;
  });

  return (
    <>
      <Head>
        <title>Luke the Web Dev | Web Development Blog and Portfolio</title>
        <meta
          name="description"
          content="Welcome to Luke the Web Dev! My name is Luke Anderson and by day I'm a web engineer at ASOS. By night (or weekends) I write blog posts and code cool stuff."
        ></meta>
      </Head>
      <main className="home" itemScope="" itemType="http://schema.org/Person">
        <section className="first">
          <div className="content">
            <Image
              src="/images/luke-twomey.webp"
              alt="Luke Anderson"
              width="390"
              height="390"
              style={{
                height: "auto",
                maxWidth: "500px",
                width: "100%",
              }}
              sizes="(max-width: 500px) 100vw,
              (max-width: 1400px) 50vw,
              25vw"
              priority
              className="portrait"
              itemProp="image"
            />

            <section className="blue">
              <p>
                Hey guys! My name's <span itemProp="givenName">Luke</span>{" "}
                <span itemProp="familyName">Anderson</span> and I'm a{" "}
                <span itemProp="jobTitle">Web Engineer</span> at ASOS, before
                which I was working at Sky.
              </p>
              <p>
                I have been programming since 2015, and I just love the process
                of bringing something to life through code.
              </p>
              <Link href="/about" className="aboutLink button">
                About Me
              </Link>
            </section>
          </div>
        </section>

        <section className="blogPreview grey">
          <div className="content">
            <h2>Blog</h2>
            <section className="previews">
              <BlogPreview posts={sortBlogPostsByDate} theme="dark" />
            </section>
            <SignupForm
              message="Subscribe to receive an alert for each new post!"
              location="homePage"
            />
            <Link href="/blog" className="button">
              View Blog
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const featurePosts = files.reduce((acc, file) => {
    const slug = file.replace(".md", "");
    const filecontent = fs.readFileSync(`posts/${file}`, "utf-8");
    const parsedContent = matter(filecontent);
    const { data } = parsedContent;

    if (data.feature === "true") {
      return [...acc, { slug, data }];
    }

    return acc;
  }, []);

  return {
    props: {
      featurePosts,
    },
  };
}

export default App;
