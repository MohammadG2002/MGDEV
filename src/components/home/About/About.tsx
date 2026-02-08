import { useRef } from "react";
import splitLetter from "../../../utils/splitLetter";
import { motion, useScroll } from "motion/react";
import useParallax from "../../../hooks/useParallax";
import "./About.css";
import { useScrollSpring } from "../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../hooks/useFadeAnimation";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const underlineY = useParallax(scrollYProgress, 500);
  const contentY = useParallax(scrollYProgress, 250);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { fadeHeader, fadeContent } = useFadeAnimation(slowProgress);
  return (
    <section className="snap-section about" id="about">
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

      <div className="ref" ref={ref}></div>
    </section>
  );
};

export default About;
