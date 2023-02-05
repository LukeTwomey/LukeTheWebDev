import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Signup from "../components/Signup";
import styles from "../styles/about.module.css";

export const About = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Luke Twomey | Luke the Web Dev</title>
        <meta
          name="description"
          content="I'm a web developer from London, currently working for ASOS. I have been programming since 2015, and I just love the process of
          bringing something to life through code."
        ></meta>
      </Head>

      <main className="about" itemScope="" itemType="http://schema.org/Person">
        <h1>About Me</h1>
        <h2>Here to Help You on Your Web Development Journey</h2>
        <p>
          Hello and welcome! My name's <span itemProp="givenName">Luke</span>{" "}
          <span itemProp="familyName">Twomey</span> and I'm a{" "}
          <span itemProp="jobTitle">Web Engineer </span>
          from sunny London. I'm currently working for ASOS, before which I was
          working at Sky.
        </p>

        <Image
          src="/images/me-in-new-york.webp"
          alt="Luke Twomey"
          width="358"
          height="266"
          priority
          className={styles.image}
          itemProp="image"
        />

        <p>
          I have been programming since 2015, and I just love the process of
          bringing something to life through code.
        </p>

        <p>
          I currently live in Walthamstow with my fiancée Fi and Twiglet the
          cat. Obligatory cat pic below! (he loves to play fetch with the ball
          by his tail. He thinks he's a dog.)
        </p>

        <Image
          src="/images/twigs.webp"
          alt="Twiglet the cat"
          width="358"
          height="221"
          priority
          className={styles.image}
          itemProp="image"
        />

        <p>
          I have always been a very logical person, methodical and well
          organised, with a talent for problem solving and a high attention to
          detail. I had always known I enjoyed development - right from when I
          first started programming in university.
        </p>

        <p>
          You'll often find me working on personal projects outside of work, the
          latest being the current iteration of this very website. It is written
          in React, and uses Next.js to benefit from server-side rendering. This
          means blazing fast page load times!
        </p>

        <p>
          The main focus of this site is <Link href={"/blog"}>my new blog</Link>
          , which I will be updating each week. I found sites like this
          invaluable to me when I was learning to code, and I would love to
          share my knowledge with you and help you on your web development
          journey.
        </p>

        <p>
          The whole point of the blog is to write something I would like to read
          myself (and I will definitely be referring back to to it myself in
          future!). You will hopefully gain lots of valuable information which
          will help you, as it helped me.
        </p>

        <Signup
          message="Subscribe to receive an alert for each new post!"
          location="aboutPage"
        />

        <p></p>

        <p>
          For a preview of what the blog will contain, check out
          <Link href={"/blog/how-to-become-a-web-developer"}>
            How to Become a Web Developer
          </Link>
          or "such and such a post here"
        </p>
      </main>
    </div>
  );
};

export default About;
