import { useRef } from "react";
import { motion, useScroll } from "motion/react";

import splitLetter from "../../../utils/splitLetter";
import useParallax from "../../../hooks/useParallax";
import { useScrollSpring } from "../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../hooks/useFadeAnimation";

import SkillItem from "./SkillItem";
import skills from "./skills";

import "./Skills.css";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const underlineY = useParallax(scrollYProgress, 500);
  const skillsY = useParallax(scrollYProgress, 250);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { fadeHeader, fadeContent } = useFadeAnimation(slowProgress);

  return (
    <div className="skills-container" id="skills">
      <div className="skills-content">
        <motion.div className="skills-underline" style={{ y: underlineY }}>
          <motion.h1 style={{ opacity: fadeHeader }}>
            {splitLetter("Skills & Experience")}
          </motion.h1>

          <motion.p style={{ opacity: fadeContent }}>
            Software developer with experience in building responsive and
            interactive web applications using React, TypeScript, and modern web
            technologies. Familiar with UI design, version control, and
            deployment workflows.
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
          <div className="skills">
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                image={skill.image}
                name={skill.name}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="ref" ref={ref}></div>
    </div>
  );
};

export default Skills;
