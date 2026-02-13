import { motion } from "motion/react";

import splitLetter from "../../../utils/splitLetter";

import AboutParagraphs from "./AboutParagraphs";
import AboutParagraph from "./AboutParagraph/AboutParagraph";

import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div className="about__header">
        <h1>{splitLetter("Hi, I'm Mohammad")}</h1>
        <h1>{splitLetter("Software Developer")}</h1>
      </motion.div>

      <motion.div className="about__content">
        {AboutParagraphs.map((paragraph) => (
          <AboutParagraph key={paragraph.id} paragraph={paragraph} />
        ))}
      </motion.div>

      <div className="about__scroll-target" />
    </section>
  );
};

export default About;
