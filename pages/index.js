import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import BlogPreview from "../components/BlogPreview";
import ProjectsPreview from "../components/ProjectsPreview";
import matter from "gray-matter";
import fs from "fs";

export const App = ({ featurePosts }) => {
  return (
    <>
      <Head>
        <title>Luke the Web Dev</title>
        <meta
          name="description"
          content="The home of Luke the Web Dev! Great blog, you'll love it."
        ></meta>
      </Head>
      <main className="home" itemScope="" itemType="http://schema.org/Person">
        <Image
          src="/images/luke-twomey.webp"
          alt="Luke Twomey"
          width="390"
          height="390"
          priority
          className="portrait"
          itemProp="image"
        />

        <section className="blue">
          <p>
            Hey guys! My name's <span itemProp="givenName">Luke</span>{" "}
            <span itemProp="familyName">Twomey</span> and I'm a{" "}
            <span itemProp="jobTitle">Web Engineer</span> at ASOS, before which
            I was working at Sky.
          </p>
          <p>
            I have been programming since 2015, and I just love the process of
            bringing something to life through code.
          </p>
          {/* <ADD LINK TO ABOUT></ADD> */}
        </section>

        <section className="blogPreview grey">
          <h2>Blog</h2>
          <BlogPreview posts={featurePosts} theme="dark" />
          {/* <ADD SIGNUP HERE TOO></ADD> */}
          <Link href="/blog" className="button">
            View Blog
          </Link>
        </section>
        <ProjectsPreview />
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
