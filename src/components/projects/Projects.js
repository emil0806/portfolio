import React, { useState } from "react";
import "./Projects.css";
import placeholder from "../../assets/placeholder.mp4";

const allProjects = [
  {
    title: "Ball collecting robot",
    type: "School",
    tech: "Python, Image recognition, Algorithms",
    description:
      "A robot that detects and collects balls using OpenCV and socket-based communication.",
  },
  {
    title: "Light Measuring Device",
    type: "School",
    tech: "Python, Database, Embedded",
    description:
      "Built a physical device with sensors and Python backend for saving and analyzing data.",
  },
  {
    title: "E-commerce",
    type: "Work",
    tech: "CSS, E-commerce, Shopify, SoMe",
    description:
      "Shopify-based e-commerce site with social media integration and theme customization.",
  },
  {
    title: "Yukon Solitaire",
    type: "School",
    tech: "C, GUI",
    description: "A solitaire game built from scratch with custom GUI in C.",
  },
  {
    title: "Website for Sports club",
    type: "Work",
    tech: "Wordpress, CSS",
    description:
      "Custom website built for a local sports club with CMS and responsive design.",
  },
  {
    title: "Food App",
    type: "School",
    tech: "Kotlin, Database",
    description:
      "Android app built using Kotlin for storing and filtering healthy food recipes.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? allProjects
      : allProjects.filter((proj) => proj.type === filter);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-header">PROJECTS</h2>

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
          <div key={index} className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <div className="project-title">{project.title}</div>
                <div className="project-type">
                  <em>{project.type}</em>
                </div>
                <div className="project-tech">{project.tech}</div>
              </div>
              <div className="project-card-back">
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-video-box">
        <h3>
          <em>
            <u>What is a project you're really proud of – and why?</u>
          </em>
        </h3>
        <div className="project-video-box">
          <video width="100%" controls autoPlay loop playsInline>
            <source src={placeholder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
