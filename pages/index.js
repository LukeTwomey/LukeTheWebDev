import Head from "next/head";
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
      <main className="home">
        <Image
          src="/images/luke-twomey.webp"
          alt="Luke Twomey"
          width="390"
          height="390"
          priority
          className="portrait"
        />

        <section className="blue">
          <p>
            Hey guys! My name's Luke Twomey and I'm a mid-level web engineer at
            ASOS, before which I was working at Sky.
          </p>
          <p>
            I have been programming since 2015, and I just love the process of
            bringing something to life through code.
          </p>
        </section>

        <BlogPreview posts={featurePosts} />
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
