import styles from "./ProjectsPreview.module.css";
import Link from "next/link";
import Image from "next/image";

export const ProjectsPreview = () => {
  return (
    <section className="projects blue">
      <div className="content">
        <h2>Projects</h2>
        <section className="previews">
          <article className={styles.project}>
            <Image
              src="/images/meal-genie.webp"
              alt="Meal Genie preview"
              width="358"
              height="170"
              style={{
                height: "auto",
                width: "100%",
              }}
              sizes="(max-width: 600px) 100vw,
                (max-width: 1400px) 50vw,
                33vw"
              className="full-width"
            />
            <div className={styles.preview}>
              <Link href="/projects/meal-genie">
                <h3>Meal Genie</h3>
              </Link>
              <p>
                Written in React and Redux, Meal Genie is a meal planning app to
                help you organise your recipes for the week.
              </p>
              <Link href={`/projects/meal-genie`}>Read more...</Link>
            </div>
          </article>
          <article className={styles.project}>
            <Image
              src="/images/sound-sniffer.webp"
              alt="Sound Sniffer preview"
              width="358"
              height="170"
              style={{
                height: "auto",
                width: "100%",
              }}
              sizes="(max-width: 600px) 100vw,
                (max-width: 1400px) 50vw,
                33vw"
              className="full-width"
            />
            <div className={styles.preview}>
              <Link href="/projects/sound-sniffer">
                <h3>Sound Sniffer</h3>
              </Link>
              <p>
                A React app which tracks your favourite artists and uses the
                Spotify API to display their latest releases.
              </p>
              <Link href={`/projects/sound-sniffer`}>Read more...</Link>
            </div>
          </article>
        </section>
        <Link href="projects" className="button">
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
