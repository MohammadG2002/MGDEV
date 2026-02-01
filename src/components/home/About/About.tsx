import { useRef } from "react";
import splitLetter from "../../../utils/splitLetter";
import { motion, useScroll } from "motion/react";
import useParallax from "../../../hooks/useParallax";
import "./About.css";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const underlineY = useParallax(scrollYProgress, 500);
  const contentY = useParallax(scrollYProgress, 250);
  return (
    <section className="snap-section about" id="about">
      <motion.div className="about-underline" style={{ y: underlineY }}>
        <h1>{splitLetter("Hi, I'm Mohammad")}</h1>
        <h1>{splitLetter("Web Developer")}</h1>
      </motion.div>
      <motion.div className="about-content" style={{ y: contentY }}>
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
      </motion.div>

      <div className="about-bg" ref={ref}>
        <p className="dot">.</p>
      </div>
    </section>
  );
};

export default About;
