import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SignupForm from "../components/SignupForm";
import styles from "../styles/about.module.css";

export const About = () => {
  return (
    <div className="background">
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>About Luke Twomey | Luke the Web Dev</title>
        <meta
          name="description"
          content="I'm a web dev from London, currently working for ASOS. I have been programming since 2015, and love the process of
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
          height="200"
          style={{
            height: "auto",
            width: "100%",
          }}
          sizes="(max-width: 850px) 100vw,
              (max-width: 1400px) 50vw,
              33vw"
          priority
          className={styles.image}
          itemProp="image"
        />

        <p>
          I have been programming since 2015, and I just love the process of
          bringing something to life through code.
        </p>

        <p>
          I currently live in London with my fiancée Fi and Twiglet the cat -
          obligatory pic below! He loves to play fetch with the ball by his
          tail. He thinks he's a dog.
        </p>

        <Image
          src="/images/twigs.webp"
          alt="Twiglet the cat"
          width="358"
          height="216"
          style={{
            height: "auto",
            width: "100%",
          }}
          sizes="(max-width: 850px) 100vw,
              (max-width: 1400px) 50vw,
              33vw"
          priority
          className={styles.image}
          itemProp="image"
        />

        <p>
          You'll often find me working on personal projects outside of work, the
          latest being the current iteration of this website. It is written in
          React, and uses Next.js to benefit from server-side rendering. Among
          other benefits, this means blazing fast page load times!
        </p>

        <p>
          The main focus of this site is <Link href={"/blog"}>my blog</Link>,
          which is updated each week. I found blogs invaluable when I was
          learning to code, and I would love to share my knowledge with you and
          help you along your web development journey.
        </p>

        <SignupForm
          message="Subscribe to get notified when a new post drops!"
          location="aboutPage"
        />

        <p>
          I only write content that I would appreciate reading myself. All too
          often I come across confusing, inaccurate or outdated posts, which is
          really frustrating when you're trying to overcome a problem!
        </p>

        <p>
          Why not <Link href={"/blog"}>see what all the fuss is about</Link>?
        </p>

        <Link href="/blog" className="button">
          View Blog
        </Link>
      </main>
    </div>
  );
};

export default About;
