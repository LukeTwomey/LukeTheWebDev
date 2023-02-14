import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/projects.module.css";

export const Projects = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Luke Twomey" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Projects | Luke the Web Dev</title>
        <meta
          name="description"
          content="I code lots of fun stuff in my spare time. Websites, apps, api's, you name it. Here's a collection of some of the projects that have kept me busy recently."
        ></meta>
      </Head>

      <main className={styles.projects}>
        <div className="content">
          <h1>Projects</h1>
          <h2>Things that have kept me busy recently.</h2>

          <div className="previews">
            <article className={styles.project}>
              <Image
                src="/images/meal-genie.webp"
                alt="Meal Genie preview"
                width="358"
                height="188"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="full-width"
                priority
              />
              <div className="preview">
                <Link href="/projects/meal-genie">
                  <h3>Meal Genie</h3>
                </Link>
                <p>
                  Written in React and Redux, Meal Genie is a meal planning app
                  to help you organise your recipes for the week.
                </p>
                <Link href="/projects/meal-genie">Read more...</Link>
              </div>
            </article>

            <article className={styles.project}>
              <Image
                src="/images/sound-sniffer.webp"
                alt="Sound Sniffer preview"
                width="358"
                height="188"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="full-width"
                priority
              />
              <div className="preview">
                <Link href="/projects/sound-sniffer">
                  <h3>Sound Sniffer</h3>
                </Link>
                <p>
                  Sound Sniffer is a React app which tracks your favourite
                  artists and displays their latest music releases by using the
                  Spotify API.
                </p>
                <Link href="/projects/sound-sniffer">Read more...</Link>
              </div>
            </article>

            <article className={styles.project}>
              <Image
                src="/images/moneypots.webp"
                alt="Moneypots preview"
                width="358"
                height="188"
                style={{
                  height: "auto",
                  width: "100%",
                }}
                sizes="(max-width: 600px) 100vw,
                    (max-width: 1400px) 50vw,
                    33vw"
                className="full-width"
                priority
              />
              <div className="preview">
                <Link href="/projects/moneypots">
                  <h3>Moneypots</h3>
                </Link>
                <p>
                  Moneypots is an Angular app which lets you create pots to keep
                  track of your money across multiple bank accounts.
                </p>
                <Link href="/projects/moneypots">Read more...</Link>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
