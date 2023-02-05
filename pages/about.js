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
          I have always been a very logical person, methodical and well
          organised, with a talent for problem solving and a high attention to
          detail. I had always known I enjoyed development - right from when I
          first started programming in university.
        </p>

        <p>
          I currently live in Walthamstow with my fiancée Fi and Twiglet the
          cat. Obligatory cat tax below!
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
          You'll often find me working on personal projects outside of work, the
          latest being the current iteration of this very website. It is written
          in React, and uses Next.js to benefit from server-side rendering.
        </p>
        <p>
          The main focus of this site is <Link href={"/blog"}>my new blog</Link>
          , which I will be updating each week. I found sites like this
          invaluable to me when I was learning to code, and I would love to
          share my knowledge with you and help you on your web development
          journey, whatever stage you're at.
        </p>

        <Signup
          message="Subscribe to receive an alert for every new post!"
          location="aboutPage"
        />

        <p>
          add signup component (I usually post once a week, and always aim to
          make my posts as useful as possible and something I would like to find
          myself. Indeed, using it as a resoirce myself to come back to -
          emphasize that and how it will help people learn. Believe I am able to
          explain things as clearly as possible. If you dont want to miss any
          tips, sign up below.). 300-500 words. Main focus is the signup page,
          but can also put a cta at the end to move them elsewhere in the site.
          blog obvous choice.
        </p>
      </main>
    </div>
  );
};

export default About;
