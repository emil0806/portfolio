import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="mobile-left">
        {/* Hamburger icon kun på mobil */}
        <button
          className="hamburger"
          aria-label="Open navigation menu"
          onClick={handleMenuToggle}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`nav-container${menuOpen ? " open" : ""}`}>
        <nav className={`nav-menu${menuOpen ? " open" : ""}`}>
          <ScrollLink
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleLinkClick}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleLinkClick}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleLinkClick}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="resume"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleLinkClick}
          >
            Resume
          </ScrollLink>
          <ScrollLink
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={handleLinkClick}
          >
            Contact
          </ScrollLink>
          {/* Social icons inside nav for mobile */}
          <div className="nav-social-icons">
            <a
              href="https://github.com/emil0806"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/emil-leonhard-lauritzen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
      {/* Social icons only visible on desktop */}
      <div className="social-icons">
        <a
          href="https://github.com/emil0806"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/emil-leonhard-lauritzen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}
