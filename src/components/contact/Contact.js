import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import profileImage from "../../assets/image.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const codeRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const contactHeader = `const sectionHeader = "CONTACT";`;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && typedText.length < contactHeader.length) {
      const timeout = setTimeout(() => {
        setTypedText(contactHeader.slice(0, typedText.length + 1));
      }, 15); // speed of typing

      return () => clearTimeout(timeout);
    }
  }, [inView, typedText, contactHeader]);

  return (
    <section className="contact-section" id="contact" ref={ref}>
      <div className="contact-header">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          wrapLines
          lineNumberStyle={{ color: "#6d6d6d" }}
          PreTag="div"
          className="contact-header-typing"
          ref={codeRef}
          customStyle={{
            padding: "20px",
            borderRadius: "10px",
            margin: "0",
            width: "100%",
          }}
        >
          {typedText}
        </SyntaxHighlighter>
      </div>

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
