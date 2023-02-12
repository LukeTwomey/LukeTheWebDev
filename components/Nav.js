import React from "react";

export const Nav = ({ toggleNav }) => {
  return (
    <nav id="nav">
      <div className="navbar">
        <div className="container navContainer">
          <div className="hamburgerLines" onClick={toggleNav}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>

          <div className="menuItems">
            <a
              href="/"
              title="Home"
              onClick={() => {
                toggleNav();
              }}
            >
              Home
            </a>
            <a
              href="/about"
              title="About Me"
              onClick={() => {
                toggleNav();
              }}
            >
              About Me
            </a>
            <a
              href="/blog"
              title="Blog"
              onClick={() => {
                toggleNav();
              }}
            >
              Blog
            </a>
            <a
              href="/projects"
              title="Projects"
              onClick={() => {
                toggleNav();
              }}
            >
              Projects
            </a>
            <a
              href="/contact"
              title="Contact Me"
              onClick={() => {
                toggleNav();
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
