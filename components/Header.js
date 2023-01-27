import React, { useState } from "react";
import { Nav } from "./Nav";
import styles from "./Header.module.css";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    console.log("Toggle Nav");
    setNavOpen(!navOpen);
    document.documentElement.classList.toggle("no-scroll");
    document.body.classList.toggle("no-scroll");
  };

  const closeNav = () => {
    setNavOpen(false);
    document.documentElement.classList.remove("no-scroll");
    document.body.classList.remove("no-scroll");
  };

  // this isn't working - class isn't getting added to header on nav open/close
  return (
    // <header className={navOpen ? styles.navOpen : ""}>
    <header className={navOpen ? "navOpen" : ""}>
      <section className={styles.title}>
        <a href="/" onClick={closeNav}>
          <h1>Luke the Web Dev</h1>
        </a>
      </section>

      <Nav toggleNav={toggleNav} />
    </header>
  );
};

export default Header;
