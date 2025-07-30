import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div /> {/* Tom venstre side */}
      <div className="nav-container">
        <nav className="nav-menu">
          <ScrollLink
            to="intro"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
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
          >
            Contact
          </ScrollLink>
        </nav>
      </div>
      <div className="social-icons">
        <a
          href="https://github.com/dit-brugernavn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/dit-brugernavn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/dit-brugernavn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </header>
  );
}
