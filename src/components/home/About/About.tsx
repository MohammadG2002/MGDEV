import { useRef } from "react";
import { motion, useScroll } from "motion/react";

import splitLetter from "../../../utils/splitLetter";
import useParallax from "../../../hooks/useParallax";
import { useScrollSpring } from "../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../hooks/useFadeAnimation";

import AboutParagraphs from "./AboutParagraphs";
import AboutParagraph from "./AboutParagraph/AboutParagraph";

import "./About.css";

const About = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const underlineY = useParallax(scrollYProgress, 500);
  const contentY = useParallax(scrollYProgress, 250);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { fadeHeader, fadeContent } = useFadeAnimation(slowProgress);

  return (
    <div className="about-container" id="about">
      <motion.div
        className="about-underline"
        style={{ y: underlineY, opacity: fadeHeader }}
      >
        <h1>{splitLetter("Hi, I'm Mohammad")}</h1>
        <h1>{splitLetter("Web Developer")}</h1>
      </motion.div>

      <motion.div
        className="about-content"
        style={{ y: contentY, opacity: fadeContent }}
      >
        {AboutParagraphs.map((paragraph, index) => (
          <AboutParagraph key={index} paragraph={paragraph} />
        ))}
      </motion.div>

      <div className="ref" ref={ref}></div>
    </div>
  );
};

export default About;
