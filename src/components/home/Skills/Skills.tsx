import { motion } from "motion/react";

import splitLetter from "../../../utils/splitLetter";

import SkillItem from "./SkillItem";
import skills from "./skills";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills-container" id="skills">
      <div className="skills-content">
        <motion.div className="skills-underline">
          <motion.h1>{splitLetter("Skills & Experience")}</motion.h1>

          <motion.p>
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

        <motion.div>
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

      <div className="ref" />
    </section>
  );
};

export default Skills;
