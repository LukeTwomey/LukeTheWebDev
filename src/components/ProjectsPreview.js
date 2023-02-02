import { Link } from "react-router-dom";
import "./ProjectsPreview.css";
import mealGenie from "../images/meal-genie.webp";
import soundSniffer from "../images/sound-sniffer.webp";

export const ProjectsPreview = () => {
  return (
    <section className="projects blue">
      <h2>Projects</h2>

      <article className="project">
        <img className="full-width" src={mealGenie} alt="Flat lay meal" />
        <div className="preview">
          <h3>Meal Genie</h3>
          <p>
            Written in React and Redux, Meal Genie is a meal planning app to
            help you organise your recipes for the week.
          </p>
          <Link to={`/projects/meal-genie`}>Read more...</Link>
        </div>
      </article>

      <article className="project">
        <img className="full-width" src={soundSniffer} alt="Spotify logo" />
        <div className="preview">
          <h3>Sound Sniffer</h3>
          <p>
            A React app which tracks your favourite artists and uses the Spotify
            API to display their latest releases.
          </p>

          <Link to={`/projects/sound-sniffer`}>Read more...</Link>
        </div>
      </article>

      <Link to="projects" className="button">
        View Projects
      </Link>
    </section>
  );
};
