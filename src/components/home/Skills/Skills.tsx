import { motion } from "motion/react";

import splitLetter from "../../../utils/splitLetter";

import SkillItem from "./SkillItem";
import skills from "./skills";

import "./Skills.css";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

const Skills = () => {
  const { ref, headerProps, contentProps } = useStaggeredInView({
    staggerDelay: 0.15,
  });
  return (
    <section className="skills-sec" id="skills" ref={ref}>
      <div className="skills-sec__underline">
        <motion.h1 {...headerProps}>
          {splitLetter("Skills & Experience")}
        </motion.h1>

        <motion.p {...contentProps}>
          Software developer with experience in building responsive and
          interactive web applications using React, TypeScript, and modern web
          technologies. Familiar with UI design, version control, and deployment
          workflows.
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
      </div>

      <motion.div>
        <div className="skills-sec__items">
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
    </section>
  );
};

export default Skills;
