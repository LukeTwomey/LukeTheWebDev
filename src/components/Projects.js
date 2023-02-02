import React from "react";
import { Link } from "react-router-dom";
import mealGenie from "../images/meal-genie.webp";
import soundSniffer from "../images/sound-sniffer.webp";
import moneypots from "../images/moneypots-1.webp";
import "./Projects.css";

export const Projects = () => {
  return (
    <main className="projects">
      <h1>Projects</h1>

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

      <article className="project">
        <img className="full-width" src={moneypots} alt="Spotify logo" />
        <div className="preview">
          <h3>Moneypots</h3>
          <p>
            Moneypots is an Angular app which lets you create pots to keep track
            of your money across multiple bank accounts.
          </p>
          <Link to={`/projects/moneypots`}>Read more...</Link>
        </div>
      </article>
    </main>
  );
};
