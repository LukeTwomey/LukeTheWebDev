import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const Nav = ({ toggleNav }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="container nav-container">
          <div className="hamburger-lines" onClick={toggleNav}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div className="menu-items">
            <Link
              to="/"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Blog
            </Link>
            <Link
              to="/projects"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
