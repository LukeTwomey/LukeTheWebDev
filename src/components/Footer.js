import React from "react";
import { Link } from "react-router-dom";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import pinterest from "../images/pinterest.svg";
import github from "../images/github.svg";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
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
