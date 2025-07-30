import React from "react";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import { Element } from "react-scroll";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Sticky Header */}
      <Header />

      {/* Sections wrapped in scrollable Element */}
      <Element name="intro" className="section">
        <Intro />
      </Element>

      <Element name="about" className="section">
        <About />
      </Element>

      <Element name="projects" className="section">
        <Projects />
      </Element>

      <Element name="resume" className="section">
        <Resume />
      </Element>

      <Element name="contact" className="section">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}
