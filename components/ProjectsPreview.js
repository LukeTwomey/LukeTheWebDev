import styles from "./ProjectsPreview.module.css";
import Link from "next/link";
import Image from "next/image";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const ProjectsPreview = () => {
  return (
    <section className="projects blue">
      <h2>Projects</h2>
      <article className="project">
        <Image
          src="/images/meal-genie.webp"
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
          <Link href={`/projects/meal-genie`} onClick={scrollToTop}>
            Read more...
          </Link>
        </div>
      </article>
      <article className="project">
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
          <Link href={`/projects/sound-sniffer`} onClick={scrollToTop}>
            Read more...
          </Link>
        </div>
      </article>
      <Link href="projects" className="button" onClick={scrollToTop}>
        View Projects
      </Link>
    </section>
  );
};

export default ProjectsPreview;
