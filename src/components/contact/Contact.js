import React from "react";
import "./Contact.css";
import profileImage from "../../assets/image.png"; // Tilpas til din sti
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-header">CONTACT</h2>

      <div className="contact-content">
        <img src={profileImage} alt="Profile" className="contact-image" />

        <h3 className="contact-name">Emil Leonhard Lauritzen</h3>
        <p className="contact-email">
          <em>emilleonhardlauritzen@gmail.com</em>
        </p>
        <p className="contact-phone">+45 42 19 03 76</p>

        <div className="contact-icons">
          <a
            href="https://github.com/YOUR_GITHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
          </a>
        </div>

        <p className="contact-footer">
          <em>
            I'm always interested to hear about future opportunities.
            <br /> <br />
            Let’s get in touch.
          </em>
        </p>
      </div>
    </section>
  );
}
