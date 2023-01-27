import React from "react";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

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
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a
              href="/about"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              About
            </a>
            <a
              href="/blog"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Blog
            </a>
            <a
              href="/projects"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Projects
            </a>
            <a
              href="/contact"
              onClick={() => {
                toggleNav();
                scrollToTop();
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
