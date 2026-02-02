import { useRef } from "react";
import splitLetter from "../../../utils/splitLetter";
import { motion, useScroll } from "motion/react";
import useParallax from "../../../hooks/useParallax";
import "./Skills.css";
import Skill from "./Skill/Skill";
import skills from "./skills";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const underlineY = useParallax(scrollYProgress, 500);
  const skillsY = useParallax(scrollYProgress, 250);
  return (
    <section className="snap-section skills" id="skills">
      <motion.div className="skills-underline" style={{ y: underlineY }}>
        <h1>{splitLetter("Skills & Experience")}</h1>
        <p>
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
        </p>
      </motion.div>

      <motion.div className="skills-container" style={{ y: skillsY }}>
        {skills.map((skill) => (
          <Skill key={skill.name} image={skill.image} name={skill.name} />
        ))}
      </motion.div>
      <div className="ref" ref={ref}></div>
    </section>
  );
};

export default Skills;
