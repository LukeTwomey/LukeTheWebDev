import React, { useState } from "react";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    document.documentElement.classList.toggle("no-scroll");
    document.body.classList.toggle("no-scroll");
  };

  const closeNav = () => {
    setNavOpen(false);
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  };

  return (
    <header className={navOpen ? "navOpen" : ""}>
      <section className="title">
        <Link to="/" onClick={closeNav}>
          <h1>Luke the Web Dev</h1>
        </Link>
      </section>

      <Nav toggleNav={toggleNav} />
    </header>
  );
};
