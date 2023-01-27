import Head from "next/head";
import React from "react";
import { BlogPreview } from "./BlogPreview";
import { ProjectsPreview } from "./ProjectsPreview";
import "./Home.css";
import lukeTwomey from "../images/luke-twomey.webp";

export const Home = () => {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="author" content="Moleseng" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="home">
        <img className="portrait" src={lukeTwomey} alt="Luke Twomey" />

        <section className="blue">
          <p>
            Hey guys! My name's Luke Twomey and I'm a mid-level web engineer at
            ASOS, before which I was working at Sky.
          </p>
          <p>
            I have been programming since 2015, and I just love the process of
            bringing something to life through code.
          </p>
        </section>

        <BlogPreview />
        <ProjectsPreview />
      </main>
    </div>
  );
};
