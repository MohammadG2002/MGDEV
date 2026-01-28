import React from "react";
import splitLetter from "../../../utils/splitLetter";
import "./About.css";

const About = () => {
  return (
    <section className="snap-section about" id="about">
      <div className="about-headline">
        <h1>{splitLetter("Hi, I'm Mohammad")}</h1>
        <h1>{splitLetter("Web Developer")}</h1>
      </div>
      <div className="about-content">
        <p>
          <strong>Frontend Development</strong>
          <br />
          I build responsive, user-friendly web interfaces and enjoy creating
          thoughtful digital experiences.
          <br />
          <br />
          <strong>Interior Design</strong>
          <br />
          I work part-time in interior design, which inspires my sense of
          layout, color, and visual balance.
          <br />
          <br />
          <strong>Personal Interests</strong>
          <br />I enjoy exploring new ideas, refining projects, and staying
          curious about design and technology.
        </p>
      </div>
    </section>
  );
};

export default About;
