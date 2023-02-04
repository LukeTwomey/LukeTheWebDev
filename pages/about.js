import Head from "next/head";
import Image from "next/image";
import styles from "../styles/about.module.css";

export const About = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About</title>
        <meta name="description" content="Here's my great about page!"></meta>
      </Head>

      <main className="about">
        <h1>About</h1>
        <p>
          Hello and welcome! My name's Luke Twomey and I'm a web developer
          currently working for ASOS in sunny Camden. Before that I was working
          at Sky.
        </p>
        <Image
          src="/images/me-in-new-york.webp"
          alt="Luke Twomey"
          width="358"
          height="266"
          priority
          className={styles.portrait}
          itemprop="image"
        />
        <p>
          I’ve made a career out of coding since 2015, and I also like to work
          on various side projects, [my blog] being just one of them!
        </p>
      </main>
    </div>
  );
};

export default About;
