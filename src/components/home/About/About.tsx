import { motion } from "motion/react";
import splitLetter from "../../../utils/splitLetter";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";
import AboutParagraphs from "./AboutParagraphs";
import AboutParagraph from "./AboutParagraph/AboutParagraph";
import "./About.css";

const About = () => {
  const { ref, headerProps } = useStaggeredInView({
    staggerDelay: 0.15,
  });

  return (
    <section className="about" id="about" ref={ref}>
      <motion.div className="about__header" {...headerProps}>
        <h1>{splitLetter("Hi, I'm Mohammad")}</h1>
        <h1>{splitLetter("Software Developer")}</h1>
      </motion.div>

      <div className="about__content">
        {AboutParagraphs.map((paragraph, index) => (
          <AboutParagraph
            key={paragraph.id}
            paragraph={paragraph}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
