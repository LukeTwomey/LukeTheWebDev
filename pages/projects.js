import Image from "next/image";
import styles from "../styles/projects.module.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const Projects = () => {
  return (
    <main className={styles.projects}>
      <h1>Projects</h1>

      <article className={styles.project}>
        <Image
          src={`/images/meal-genie.webp`}
          alt="Meal Genie preview"
          width="358"
          height="170"
          className="full-width"
          priority
        />
        <div className="preview">
          <h3>Meal Genie</h3>
          <p>
            Written in React and Redux, Meal Genie is a meal planning app to
            help you organise your recipes for the week.
          </p>
          {/* <Link to={`/projects/meal-genie`} onClick={scrollToTop}> */}
          Read more...
          {/* </Link> */}
        </div>
      </article>

      <article className={styles.project}>
        <Image
          src="/images/sound-sniffer.webp"
          alt="Sound Sniffer preview"
          width="358"
          height="170"
          className="full-width"
          priority
        />
        <div className="preview">
          <h3>Sound Sniffer</h3>
          <p>
            A React app which tracks your favourite artists and uses the Spotify
            API to display their latest releases.
          </p>
          {/* <Link to={`/projects/sound-sniffer`} onClick={scrollToTop}> */}
          Read more...
          {/* </Link> */}
        </div>
      </article>

      <article className={styles.project}>
        <Image
          src="/images/moneypots-1.webp"
          alt="Moneypots preview"
          width="358"
          height="170"
          className="full-width"
          priority
        />
        <div className="preview">
          <h3>Moneypots</h3>
          <p>
            Moneypots is an Angular app which lets you create pots to keep track
            of your money across multiple bank accounts.
          </p>
          {/* <Link to={`/projects/moneypots`} onClick={scrollToTop}> */}
          Read more...
          {/* </Link> */}
        </div>
      </article>
    </main>
  );
};

export default Projects;
