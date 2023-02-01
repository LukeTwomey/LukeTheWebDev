import Image from "next/image";
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

  return (
    <header className={navOpen ? "navOpen" : ""}>
      <section className={styles.title}>
        <Image
          src="/images/logo.webp"
          alt="Luke the Web Dev Logo"
          width="100"
          height="100"
          priority
          className={styles.logo}
        />
        <a href="/" onClick={closeNav}>
          <h1>Luke the Web Dev</h1>
        </a>
      </section>

      <Nav toggleNav={toggleNav} />
    </header>
  );
};

export default Header;
