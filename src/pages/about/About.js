import React from "react";
import "./About.css";
import Header from "../../components/header/Header";

const timeline = [
  {
    years: "1999 - 2005",
    title: "Born and raised",
    description: "Born on June 8th 1999 and grew up in the South of Denmark.",
  },
  {
    years: "2005 - 2015",
    title: "Elementary School",
    description: "Became national youth champion in badminton.",
  },
  {
    years: "2015 - 2016",
    title: "“Efterskole”",
    description: "Went to a sports-focused boarding school.",
  },
  {
    years: "2016 - 2019",
    title: "Sports College and Gymnasium",
    description:
      "Graduated from Ikast-Brande Gymnasium and started elite sport.",
  },
  {
    years: "2019 - 2023",
    title: "Professional Athlete",
    description: "Traveled Europe playing tournaments, career ended by injury.",
  },
  {
    years: "2023 - present",
    title: "DTU and Company Owner",
    description: "Started studying Software Technology and built a business.",
  },
];

export default function About() {
  return (
    <div className="about">
      <Header />
      <div className="about-page">
        <section className="about-intro">
          <h3>
            I'm a former Professional Athlete turned Software Engineer and
            Entrepreneur.
          </h3>
        </section>

        <section className="flip-grid">
          {timeline.map((item, idx) => (
            <div className="flip-card" key={idx}>
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="vertical-col">
                    <span className="vertical-text year">{item.years}</span>
                  </div>
                  <div className="vertical-col">
                    <span className="vertical-text title">{item.title}</span>
                  </div>
                </div>

                <div className="flip-back">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
