import React, { useState, useRef, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./About.css";
import placeholder from "../../assets/placeholder.mp4";
import { useInView } from "react-intersection-observer";

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

// Alle prikker med årstal og tekst
const allDots = [
  {
    year: 1999,
    label: `Born on 8th of June 1999 
    near Copenhagen`,
    period: `Early Years`,
  },
  {
    year: 2001,
    label: `Moved to the south of 
    Jylland`,
    period: "Early Years",
  },
  {
    year: 2004,
    label: `Began playning badminton, 
    and developed a passion for 
    sport`,
    period: "Early Years",
  },
  {
    year: 2005,
    label: `Started in Elementary 
    School`,
    period: "Elementary School",
  },
  {
    year: 2012,
    label: `By the time I finished 
      7th grade I had passed the 
      first year of Mathematics on 
      Gymnasium level.`,
    period: "Elementary School",
  },
  {
    year: 2014,
    label: `Won the National Youth 
    Championship in Badminton`,
    period: "Elementary School",
  },
  {
    year: 2015,
    label: `Went to Idrætsefterskole`,
    period: "College & Gymnasium",
  },
  {
    year: 2016,
    label: `Attended Sports College 
      in Ikast to combine academics
      and competive sports.`,
    period: "College & Gymnasium",
  },
  {
    year: 2019,
    label: `Graduated Gymnasium after 
      having spent three years 
      balancing academics while 
      playing badminton at some of 
      the highest level in Denmark.`,
    period: "College & Gymnasium",
  },
  {
    year: 2019,
    label: `Started my carrer as a 
      professional athlete 
      focusing completely on 
      badminton.`,
    period: "Professional Athlete",
  },
  {
    year: 2020,
    label: `Played in both the Danish 
      Badminton League and the 
      Bundesliga in Germany.`,
    period: "Professional Athlete",
  },
  {
    year: 2021,
    label: `Travelled around Europe 
      to play in international 
      tournaments, and won 
      multiple titles.`,
    period: "Professional Athlete",
  },
  {
    year: 2021,
    label: `Played in some of the 
    biggest tournaments in the 
    world like All England and 
    Denmark Open.`,
    period: "Professional Athlete",
  },
  {
    year: 2022,
    label: `Started my passion for 
    technology as a hobby.`,
    period: "Professional Athlete",
  },
  {
    year: 2022,
    label: `Co-founder of a 
      family businnes that in under 
      two years grew to a yearly 
      revenue over a million.`,
    period: "DTU & Company Owner",
  },
  {
    year: 2023,
    label: `Ended my career due to 
      a hip injury with a career 
      highest ranking as number 50 
      in the world.`,
    period: "Professional Athlete",
  },
  {
    year: 2023,
    label: `Decided to pursue my 
      other passion in technology 
      by enrolling in 
      Software Engineering at DTU.`,
    period: "DTU & Company Owner",
  },
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(Math.floor(allDots.length / 2));
  const carouselRef = useRef();
  const dragState = useRef({ dragging: false, startX: 0, lastX: 0 });
  const codeRef = useRef(null);

  const [typedText, setTypedText] = useState("");
  const aboutHeader = `const sectionHeader = "ABOUT ME";`;

  const aboutText = `const aboutMe = {
  me: \`I'm a curious and driven software engineer
  with a strong interest in both technology and people.\`,

  motivation: \`I love building things that have a real impact
  and make people's lives easier or more enjoyable.\`,

  mindset: \`I enjoy solving complex problems
  with simple, elegant, and effective solutions.\`,

  collaboration: \`I thrive in teams where we support
  and challenge each other to grow.\`,

  creativity: \`I like combining technical precision
  with creative and logical thinking.\`,

  ambition: \`I’m always looking to improve my skills
  and contribute to meaningful projects.\`,
};`;

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView && typedText.length < aboutHeader.length) {
      const timeout = setTimeout(() => {
        setTypedText(aboutHeader.slice(0, typedText.length + 1));
      }, 15); // hastighed

      return () => clearTimeout(timeout);
    }
  }, [inView, typedText, aboutHeader]);

  useEffect(() => {
    const handleMouseDown = (e) => {
      dragState.current.dragging = true;
      dragState.current.startX = e.clientX;
      dragState.current.lastX = e.clientX;
    };
    const handleMouseMove = (e) => {
      if (!dragState.current.dragging) return;
      const dx = e.clientX - dragState.current.lastX;
      dragState.current.lastX = e.clientX;
      if (Math.abs(e.clientX - dragState.current.startX) > 40) {
        if (dx < 0 && currentIdx < allDots.length - 1) {
          setCurrentIdx((idx) => Math.min(idx + 1, allDots.length - 1));
          dragState.current.startX = e.clientX;
        } else if (dx > 0 && currentIdx > 0) {
          setCurrentIdx((idx) => Math.max(idx - 1, 0));
          dragState.current.startX = e.clientX;
        }
      }
    };
    const handleMouseUp = () => {
      dragState.current.dragging = false;
    };
    const node = carouselRef.current;
    if (node) {
      node.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      if (node) node.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [currentIdx]);

  // Find timeline info for aktiv boks
  const activeYear = allDots[currentIdx]?.year;
  const activeTimeline = timeline.find((t) =>
    // Find det timeline-interval hvor activeYear matcher
    (() => {
      const years = t.years.split(" to ");
      const start = parseInt(years[0]);
      const end =
        years[1] === "Today" ? new Date().getFullYear() : parseInt(years[1]);
      return activeYear >= start && activeYear <= end;
    })()
  );

  return (
    <section className="about-section" id="about" ref={ref}>
      <div className="about-header">
        <SyntaxHighlighter
          language="jsx"
          style={vscDarkPlus}
          wrapLines
          lineNumberStyle={{ color: "#6d6d6d" }}
          PreTag="div"
          ref={codeRef}
          customStyle={{
            textAlign: "start",
            padding: "20px",
            borderRadius: "10px",
            margin: "0",
          }}
        >
          {typedText}
        </SyntaxHighlighter>
      </div>

      <div className="about-content">
        <div className="about-text">
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
            {aboutText}
          </SyntaxHighlighter>
        </div>

        <div className="about-video">
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
            {"/* Why did you choose to become a software engineer? */"}
          </SyntaxHighlighter>
          <div className="video-box">
            <video width="100%" controls loop playsInline>
              <source src={placeholder} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Carousel Timeline */}
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {allDots.map((item, idx) => {
            const offset = idx - currentIdx;
            if (Math.abs(offset) > 3) return null;
            let className = "carousel-card";
            let scale = 0.75;
            let spacing = 220;
            if (offset === 0) {
              className += " focused";
              scale = 1.15;
              spacing = 240;
            } else if (Math.abs(offset) === 1) {
              className += " near";
              scale = 1.02;
              spacing = 250;
            } else if (Math.abs(offset) === 2) {
              className += " mid";
              scale = 0.9;
              spacing = 235;
            } else {
              className += " side";
              scale = 0.75;
              spacing = 220;
            }
            return (
              <div
                key={idx}
                className={className}
                style={{
                  left: "50%",
                  transform: `
                    translateX(calc(-50% + ${offset * spacing}px))
                    scale(${scale})
                  `,
                  zIndex:
                    offset === 0
                      ? 4
                      : Math.abs(offset) === 1
                      ? 3
                      : Math.abs(offset) === 2
                      ? 2
                      : 1,
                  opacity: 1,
                  position: "absolute",
                  top: "50%",
                  transformOrigin: "center center",
                  translate: "0 -50%",
                }}
              >
                <SyntaxHighlighter
                  language="jsx"
                  style={vscDarkPlus}
                  customStyle={{
                    padding: "15px",
                    borderRadius: "10px",
                    width: "260px",
                    height: "300px",
                    textAlign: "start",
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    wordBreak: "break-word",
                  }}
                >
                  {`{
  year: ${item.year},
  label: \`${item.label}\`,
  period: \`${item.period}\`,
}`}
                </SyntaxHighlighter>
              </div>
            );
          })}
        </div>
      </div>
      <div className="timeline-info">
        {activeTimeline && (
          <SyntaxHighlighter
            language="jsx"
            style={vscDarkPlus}
            customStyle={{
              padding: "15px",
              borderRadius: "10px",
              marginTop: "30px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "left",
            }}
          >
            {`/* Period: ${activeTimeline.years} */\n/* Title: ${activeTimeline.title} */`}
          </SyntaxHighlighter>
        )}
      </div>
    </section>
  );
}
