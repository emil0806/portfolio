import React, { useState, useEffect, useRef } from "react";
import resume from "../../assets/resume.pdf";
import resumeImg from "../../assets/resume.png";
import "./Resume.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useInView } from "react-intersection-observer";

export default function Resume() {
  const [typedText, setTypedText] = useState("");
  const resumeHeader = `const sectionHeader = "RESUME";`;
  const codeRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && typedText.length < resumeHeader.length) {
      const timeout = setTimeout(() => {
        setTypedText(resumeHeader.slice(0, typedText.length + 1));
      }, 15); // hastighed

      return () => clearTimeout(timeout);
    }
  }, [inView, typedText, resumeHeader]);

  return (
    <section className="resume-section" id="resume" ref={ref}>
      <div className="resume-header">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          wrapLines
          lineNumberStyle={{ color: "#6d6d6d" }}
          PreTag="div"
          ref={codeRef}
          customStyle={{
            padding: "20px",
            borderRadius: "10px",
            margin: "0",
          }}
        >
          {typedText}
        </SyntaxHighlighter>
      </div>

      <div className="resume-box">
        <embed
          className="resume-pdf"
          src={resume + "#toolbar=0&navpanes=0"}
          type="application/pdf"
        />
        <img
          className="resume-img"
          src={resumeImg}
          alt="CV forhåndsvisning"
          loading="lazy"
        />
      </div>

      <a
        className="resume-download"
        href={resume}
        download="Emil_Leonhard_Lauritzen_CV.pdf"
      >
        /* DOWNLOAD CV */
      </a>
    </section>
  );
}
