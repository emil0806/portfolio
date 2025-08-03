import React from "react";
import "./About.css";
import placeholder from "../../assets/placeholder.mp4";

const timeline = [
  {
    years: "1999 to 2005",
    title: "Early Years",
    description:
      "I was born in Copenhagen, but then moved to the south of Jylland after a few years, where I grew up on a farm.",
  },
  {
    years: "2005 to 2016",
    title: "Elementary School",
    description:
      "Throughout my time in Elementary School I developed an interest for logical and mathematical thinking, and by the time I finished 7th grade I had already passed the first year of Gymnasium in Mathematics. In these years I also found a huge passion for sports, and I won the National Youth Championship in Badminton.",
  },
  {
    years: "2016 to 2019",
    title: "College & Gymnasium",
    description:
      "I chose to attend Sports College in Ikast to balance academics and competitive sports. Here I played at some of the highest levels in Denmark and practiced multiple times a day, while also keeping up with my studies. All this thought me a lot about discipline and time management.",
  },
  {
    years: "2019 to 2023",
    title: "Professional Athlete",
    description:
      "After graduating from Gymnasium I decided to pursue a career as a professional athlete and focus completely on Badminton. I played in both the Danish Badminton League and the Bundesliga in Germany. I also travelled around Europe to play in international tournaments, which led to a career-high ranking of 50th in the world, and I got to play in some of the biggest tournaments in the world such as the All England Open and the Denmark Open.",
  },
  {
    years: "2023 to Today",
    title: "DTU & Company Owner",
    description:
      "After ending my career as a professional athlete due to an injury I decided to pursue another passion in technology and enrolled in Software Engineering at DTU, where I'm currently on my 5th semester. During these years I also was a part of starting a family company, that in under two years grew to a revenue of over 1 million DKK. My core responsibilities are in E-commerce and social media marketing.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-header">ABOUT</h2>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a curious and driven software engineer with a strong interest in
            both technology and people. I enjoy working on projects where I can
            combine technical precision with creative thinking, and I thrive in
            collaborative environments where I can learn from others. My toolkit
            includes [mention some tech stack, e.g. React, Node.js, Firebase],
            and I'm especially interested in building software that improves
            everyday life. Let's build something great together.
          </p>
        </div>

        <div className="about-video">
          <h3>
            <em>
              <u>Why did you decide to become a Software Engineer?</u>
            </em>
          </h3>
          <div className="video-box">
            <video width="100%" controls loop playsInline>
              <source src={placeholder} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="timeline-grid">
        {timeline.map((item, index) => (
          <div key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="card-years">
                  <div className="first-year">
                    {item.years.split(" to ")[0]}
                  </div>
                  <div className="to">to</div>
                  <div className="second-year">
                    {item.years.split(" to ")[1]}
                  </div>
                </div>
                <div className="card-title">{item.title}</div>
              </div>

              <div className="flip-card-back">
                <div className="card-back-content">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
