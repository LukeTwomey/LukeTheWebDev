import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import pinterest from "../images/pinterest.svg";
import github from "../images/github.svg";
import "./Footer.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/" onClick={scrollToTop}>
          Home
        </Link>
        <Link to="/about" onClick={scrollToTop}>
          About
        </Link>
        <Link to="/blog" onClick={scrollToTop}>
          Blog
        </Link>
        <Link to="/projects" onClick={scrollToTop}>
          Projects
        </Link>
        <Link to="/contact" onClick={scrollToTop}>
          Contact
        </Link>
      </nav>

      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100089343968124">
          <img src={facebook} alt="Facebook icon" className="filter-blue" />
        </a>
        <a href="https://uk.linkedin.com/in/luketwomey85">
          <img src={linkedin} alt="LinkedIn icon" className="filter-blue" />
        </a>
        <a href="https://twitter.com/luke_the_webdev">
          <img src={twitter} alt="Twitter icon" className="filter-blue" />
        </a>
        <a href="https://www.pinterest.co.uk/lukethewebdev/">
          <img src={pinterest} alt="Pinterest icon" className="filter-blue" />
        </a>
        <a href="https://github.com/LukeTwomey">
          <img src={github} alt="GitHub icon" className="filter-blue" />
        </a>
      </div>

      <p className="copyright">
        Copyright &copy; {new Date().getFullYear()} Luke the Web Dev
      </p>
    </footer>
  );
};
