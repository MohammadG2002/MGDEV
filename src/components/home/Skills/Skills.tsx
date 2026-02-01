// import { useRef } from "react";
// import Skill from "./Skill/Skill";
// import skills from "./skills";
// import "./Skills.css";
// import { motion, useScroll } from "motion/react";
// import useParallax from "../../../hooks/useParallax";

// const Skills = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);
//   return (
//     <section className="snap-section skills" id="skills">
//       <motion.div className="skills-description" style={{ y }}>
//         <h2>Skills & Experience</h2>
//         <p>
//           Here are some of the skills I have acquired over the years in my
//           professional journey.
//         </p>
//         <div className="skills-container">
//           {skills.map((skill) => (
//             <Skill key={skill.name} image={skill.image} name={skill.name} />
//           ))}
//         </div>
//       </motion.div>
//       <div className="about-bg" ref={ref}>
//         <p className="dot">.</p>
//       </div>
//     </section>
//   );
// };

// export default Skills;

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
