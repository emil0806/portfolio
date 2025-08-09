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
          ref={codeRef}
          customStyle={{
            borderRadius: "10px",
            margin: "0",
          }}
        >
          {typedText}
        </SyntaxHighlighter>
      </div>

      <div className="contact-content">
        <img src={profileImage} alt="Profile" className="contact-image" />

        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          customStyle={{
            textAlign: "center",
          }}
        >
          {`const name = "Emil Leonhard Lauritzen";`}
        </SyntaxHighlighter>
        <div
          style={{
            fontFamily:
              "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "var(--keyword-color)" }}>const </span>
          <span style={{ color: "var(--variable-color)" }}>mail</span> ={" "}
          <a
            href="mailto:emilleonhardlauritzen@gmail.com"
            className="contact-link"
          >
            "emilleonhardlauritzen@gmail.com"
          </a>
          ;
        </div>

        <div
          style={{
            fontFamily:
              "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            backgroundColor: "#1e1e1e",
            color: "#d4d4d4",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "var(--keyword-color)" }}>const </span>
          <span style={{ color: "var(--variable-color)" }}>phone</span> ={" "}
          <a href="tel:+4542190376" className="contact-link">
            "+45 42 19 03 76"
          </a>
          ;
        </div>

        <div className="contact-icons">
          <a
            href="https://github.com/emil0806"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/emil-leonhard-lauritzen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
          </a>
        </div>

        <div className="contact-footer">
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {`/* I'm always interested to hear about future opportunities. */`}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={{
              textAlign: "center",
              width: "100%",
            }}
          >
            {`/* Let's get in touch */`}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}
