import { motion } from "motion/react";
import splitLetter from "../../../utils/splitLetter";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";
import AboutParagraphs from "./AboutParagraphs";
import AboutParagraph from "./AboutParagraph/AboutParagraph";
import "./About.css";
import assets from "../../../assets/assets";

const About = () => {
  const { ref, headerProps } = useStaggeredInView({
    staggerDelay: 0.15,
  });

  return (
    <section
      ref={ref}
      id="about"
      className="about-sec"
      style={{ backgroundImage: `url(${assets.profile})` }}
    >
      <motion.div className="about-sec__header" {...headerProps}>
        <motion.h1>{splitLetter("Hi, I'm Mohammad")}</motion.h1>
        <motion.h1>{splitLetter("Software Developer")}</motion.h1>
      </motion.div>

      <div className="about-sec__content">
        {AboutParagraphs.map((paragraph, index) => (
          <AboutParagraph key={index} paragraph={paragraph} index={index} />
        ))}
      </div>
    </section>
  );
};

export default About;
