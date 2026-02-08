import { useRef } from "react";
import splitLetter from "../../../utils/splitLetter";
import { motion, useScroll, useInView } from "motion/react";
import useParallax from "../../../hooks/useParallax";
import "./Skills.css";
import Skill from "./Skill/Skill";
import skills from "./skills";
import { useScrollSpring } from "../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../hooks/useFadeAnimation";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const underlineY = useParallax(scrollYProgress, 500);
  const skillsY = useParallax(scrollYProgress, 250);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { fadeHeader, fadeContent } = useFadeAnimation(slowProgress);
  const skillRef = useRef(null);
  const isInView = useInView(skillRef);

  return (
    <section className="snap-section skills" id="skills">
      <motion.div className="skills-underline" style={{ y: underlineY }}>
        <motion.h1 style={{ opacity: fadeHeader }}>
          {splitLetter("Skills & Experience")}
        </motion.h1>
        <motion.p style={{ opacity: fadeContent }}>
          Frontend developer with experience in building responsive and
          interactive web applications using React, TypeScript, and modern web
          technologies. Familiar with UI design, version control, and deployment
          workflows, with a solid programming foundation in C++ and Java.
          <br />
          <br />
          Explore my projects on{" "}
          <a
            href="https://github.com/mohammadg2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </motion.p>
      </motion.div>

      <motion.div style={{ y: skillsY }}>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={skillRef}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{
                delay: isInView ? index * 0.2 + 1 : 0,
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <Skill image={skill.image} name={skill.name} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="ref" ref={ref}></div>
    </section>
  );
};

export default Skills;
