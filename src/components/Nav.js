import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

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
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => {
                toggleNav();
              }}
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={() => {
                toggleNav();
              }}
            >
              Blog
            </Link>
            <Link
              to="/projects"
              onClick={() => {
                toggleNav();
              }}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                toggleNav();
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
