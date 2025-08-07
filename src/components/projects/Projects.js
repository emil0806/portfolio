import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import {
  SiReact,
  SiJavascript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiC,
  SiKotlin,
  SiGit,
  SiShopify,
  SiWordpress,
  SiOpencv,
  SiFirebase,
} from "react-icons/si";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useInView } from "react-intersection-observer";
import placeholder from "../../assets/placeholder.mp4";

const techIcons = {
  Python: <SiPython title="Python" />,
  Database: <SiMysql title="Database" />,
  Shopify: <SiShopify title="Shopify" />,
  C: <SiC title="C" />,
  CSS: <SiCss3 title="CSS" />,
  Wordpress: <SiWordpress title="Wordpress" />,
  Kotlin: <SiKotlin title="Kotlin" />,
  OpenCV: <SiOpencv title="OpenCV" />,
  React: <SiReact title="React" />,
  HTML: <SiHtml5 title="HTML" />,
  JavaScript: <SiJavascript title="JavaScript" />,
  Firebase: <SiFirebase title="Firebase" />,
  NodeJS: <SiNodedotjs title="Node.js" />,
  Git: <SiGit title="Git" />,
};

const allProjects = [
  {
    title: "Ball collecting robot",
    type: "School",
    tech: ["Python", "OpenCV"],
    description:
      "Build an autonomous robot that navigates a defined area, detects balls using image recognition and collects them using socket-based control. My core responsibilities were as project leader and in implementing both the OpenCV image recognition as well as the Python program and pathfinding algorithm that where used for controlling the robot.",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dlvub6ilt&public_id=1_12_cbvddk&profile=cld-looping",
    aspectRatio: "16 / 9",
  },
  {
    title: "Light Measuring Device",
    type: "School",
    tech: ["Python", "Firebase"],
    description:
      "During an innovation course, I were part of a team that developed a prototype of a light measuring cart, used for taking several hundreds lighting measurements on a stadium. I had the full responsibility for the software that should track the measurements, storing it in a database and generating a final report. All done based on needs from the company.",
  },
  {
    title: "E-commerce Shop",
    type: "Work",
    tech: ["CSS", "Shopify"],
    description:
      "I designed and developed a fully functional e-commerce shop using Shopify, including different integrations such as payment, accounting and shipping. The shop is optimized for both desktop and mobile devices, and were customized from ordinary templates.",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dlvub6ilt&public_id=butik_zphouf&profile=cld-looping",
    aspectRatio: "16 / 9",
  },
  {
    title: "Portfolio Website",
    type: "Own",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "Designed and developed this personal portfolio website to showcase my projects and skills. I focused on having a simple and clean design, that makes it easy for anyone interested to get to know more about me.",
  },
  {
    title: "Betting Website",
    type: "School",
    tech: ["React", "CSS", "NodeJS", "Database"],
    description:
      "With my team we designed and developed a betting website, where users can place bets on small games like rock-paper-scissors while talking to eachother through a webcam connection. The website is built with React for the frontend and Node.js for the backend, with a database to store user data and bets.",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dlvub6ilt&public_id=betisland_cshrrl&profile=cld-looping",
  },
  {
    title: "Website for Sport club",
    type: "Work",
    tech: ["Wordpress", "JavaScript", "CSS"],
    description:
      "I was hired by a local sport club to design and develop their new website using Wordpress, as well as integrating it with a booking system. The website includes features such as calendar management, member registration, and club information.",
  },
  {
    title: "Food App",
    type: "School",
    tech: ["Kotlin", "Firebase"],
    description:
      "With my team we developed a food app that allows users to upload recipes and scroll through other peoples recipes. The app is built with Kotlin for Android, and follow moderns trends like TikTok and Instragram but focuses solely on food and recipes, while including features such as user authentication and image upload.",
    video:
      "https://player.cloudinary.com/embed/?cloud_name=dlvub6ilt&public_id=chef_yp1d0v&profile=cld-looping",
    aspectRatio: "9 / 16",
  },
  {
    title: "Yukon Solitaire",
    type: "School",
    tech: ["C"],
    description:
      "Developed a fully functionally Yukon Solitaire-game in C with a graphical user interface that allows users to move cards around with the mouse.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const [typedText, setTypedText] = useState("");
  const projectsHeader = `const sectionHeader = "PROJECTS";`;
  const codeRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && typedText.length < projectsHeader.length) {
      const timeout = setTimeout(() => {
        setTypedText(projectsHeader.slice(0, typedText.length + 1));
      }, 15); // hastighed

      return () => clearTimeout(timeout);
    }
  }, [inView, typedText, projectsHeader]);

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((proj) => proj.type === filter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-header" ref={ref}>
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          wrapLines
          lineNumberStyle={{ color: "#6d6d6d" }}
          PreTag="div"
          className="project-header-typing"
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

      <div className="filter-bar">
        {["All", "School", "Own", "Work"].map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="project-card-inner">
              <div className="project-card-front">
                <div className="project-card-header">
                  <h3>{project.title}</h3>
                  <em>{project.type}</em>
                  <div className="project-tech-icons">
                    {project.tech.map((tech, idx) => (
                      <span key={idx}>{techIcons[tech]}</span>
                    ))}
                  </div>
                </div>
                <div className="project-card-description">
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
              <div className="project-card-back">
                {hoveredCard === index && project.video && (
                  <iframe
                    width="100%"
                    height="auto"
                    maxHeight="300px"
                    src={project.video}
                    title={project.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{
                      background: "#1e1e1e",
                      display: "block",
                      aspectRatio: project.aspectRatio || "640 / 360",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project-video-section">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          wrapLines
          lineNumberStyle={{ color: "#6d6d6d" }}
          PreTag="div"
          ref={codeRef}
          customStyle={{
            textAlign: "center",
            padding: "20px",
            borderRadius: "10px",
            margin: "0",
          }}
        >
          {"/* What project are you most proud of - and why? */"}
        </SyntaxHighlighter>

        <div className="project-video-box">
          <video width="100%" controls loop playsInline>
            <source src={placeholder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
