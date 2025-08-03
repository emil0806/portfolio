import "./Intro.css";
import React, { useEffect, useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import profileImage from "../../assets/image.png";
import {
  SiReact,
  SiJavascript,
  SiOpenjdk,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiCplusplus,
  SiC,
  SiKotlin,
  SiGit,
} from "react-icons/si";
import placeholder from "../../assets/placeholder.mp4";

export default function Intro() {
  const [typedCode, setTypedCode] = useState("");
  const [visibleH1, setVisibleH1] = useState(false);
  const [visibleH2, setVisibleH2] = useState(false);
  const [visibleP, setVisibleP] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showTechIcons, setShowTechIcons] = useState(false);
  const codeRef = useRef(null);

  const techList = [
    { label: "React", icon: <SiReact title="React" /> },
    { label: "JavaScript", icon: <SiJavascript title="JavaScript" /> },
    { label: "Java", icon: <SiOpenjdk title="Java" /> },
    { label: "SQL", icon: <SiMysql title="SQL" /> },
    { label: "HTML", icon: <SiHtml5 title="HTML" /> },
    { label: "CSS", icon: <SiCss3 title="CSS" /> },
    { label: "Python", icon: <SiPython title="Python" /> },
    { label: "Node.js", icon: <SiNodedotjs title="Node.js" /> },
    { label: "C++", icon: <SiCplusplus title="C++" /> },
    { label: "C", icon: <SiC title="C" /> },
    { label: "Kotlin", icon: <SiKotlin title="Kotlin" /> },
    { label: "Git", icon: <SiGit title="Git" /> },
  ];

  const baseCode = `export default function Presentation() {
  const techList = [
    { label: "React", icon: <SiReact title="React" /> },
    { label: "JavaScript", icon: <SiJavascript title="JavaScript" /> },
    { label: "Java", icon: <SiOpenjdk title="Java" /> },
    { label: "SQL", icon: <SiMysql title="SQL" /> },
    { label: "HTML", icon: <SiHtml5 title="HTML" /> },
    { label: "CSS", icon: <SiCss3 title="CSS" /> },
    { label: "Python", icon: <SiPython title="Python" /> },
    { label: "Node.js", icon: <SiNodedotjs title="Node.js" /> },
    { label: "C++", icon: <SiCplusplus title="C++" /> },
    { label: "C", icon: <SiC title="C" /> },
    { label: "Kotlin", icon: <SiKotlin title="Kotlin" /> },
    { label: "Git", icon: <SiGit title="Git" /> },
  ];

  return (
    <div>      
      <img src="profileImage" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', display: 'block' }} />
      <h1 style={{ color: '#2563eb', fontSize: '3rem', textAlign: 'center' }}>
        Hi, I am Emil
      </h1>
      <h2 style={{ color: '#2563eb', fontSize: '2rem', textAlign: 'center' }}>
        I am a software engineer
      </h2>
      <p style={{ color: '#64748b', fontSize: '1.2rem', textAlign: 'center' }}>
        I strive to build effective solutions
      </p>
      <section className="tech-stack">
        {techList.map((tech, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem" }}>{tech.icon}</div>
                <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>{tech.label}</div>
            </div>
        ))}`;

  const endCode = `
      </section>
    </div>
  );
}`;

  useEffect(() => {
    const startTyping = () => {
      let charIndex = 0;
      const fullCode = baseCode + endCode;
      setTypedCode("");
      setVisibleH1(false);
      setVisibleH2(false);
      setVisibleP(false);
      setShowImage(false);
      setShowTechIcons(false);

      const type = () => {
        if (charIndex <= fullCode.length) {
          const current = fullCode.slice(0, charIndex);
          setTypedCode(current);

          if (current.includes("</h1>") && !visibleH1) setVisibleH1(true);
          if (current.includes("</h2>") && !visibleH2) setVisibleH2(true);
          if (current.includes("</p>") && !visibleP) setVisibleP(true);
          if (current.includes("profileImage") && !showImage)
            setShowImage(true);
          if (current.includes("</section>") && !showTechIcons)
            setShowTechIcons(true);

          charIndex++;
          setTimeout(type, 1);
        }
      };

      type();
    };

    startTyping();
  }, []);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.scrollTo({
        top: codeRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [typedCode]);

  return (
    <div className="home">
      <div className="editor-container">
        {/* Venstre side */}
        <div className="output-box">
          {showImage && (
            <img
              src={profileImage}
              alt="Me"
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
                margin: "20px auto 0",
              }}
            />
          )}
          {visibleH1 && (
            <h1
              style={{
                color: "#000",
                fontSize: "3rem",
                textAlign: "center",
              }}
            >
              Hi, I am Emil
            </h1>
          )}
          {visibleH2 && (
            <h2
              style={{
                color: "#000",
                fontSize: "2rem",
                textAlign: "center",
              }}
            >
              I am a <span className="highlight">software engineer</span>
            </h2>
          )}
          {visibleP && (
            <p
              style={{
                color: "#000",
                fontSize: "1.2rem",
                textAlign: "center",
              }}
            >
              I strive to build effective solutions
            </p>
          )}
          {showTechIcons && (
            <div
              className="tech-icons"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "10px",
                marginTop: "20px",
                justifyItems: "center",
              }}
            >
              {techList.map((tech, idx) => (
                <div key={idx} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem" }}>{tech.icon}</div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>
                    {tech.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Højre side */}
        <div className="code-editor">
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            wrapLines
            showLineNumbers
            lineNumberStyle={{ color: "#6d6d6d" }}
            PreTag="div"
            ref={codeRef}
          >
            {typedCode}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className="intro-video-section">
        <h3 className="intro-question">
          <em>
            <u>
              What has had the biggest influence on you as a Software Engineer?
            </u>
          </em>
        </h3>

        <div className="video-placeholder">
          <video width="100%" controls loop playsInline>
            <source src={placeholder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
