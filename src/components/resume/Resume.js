import React from "react";
import placeholderCV from "../../assets/placeholder.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-header">RESUME</h2>

      <div className="resume-box">
        <embed
          src={placeholderCV + "#toolbar=0&navpanes=0"}
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>

      <a
        className="resume-download"
        href={placeholderCV}
        download="Emil_Leonhard_Lauritzen_CV.pdf"
      >
        DOWNLOAD CV
      </a>
    </section>
  );
}
