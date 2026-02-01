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
  return (
    <section className="snap-section skills" id="skills">
      <motion.div className="skills-underline" style={{ y: underlineY }}>
        <h1>{splitLetter("Skills & Experience")}</h1>
        <p>
          Here are some of the skills I have acquired over the years in my
          professional journey.
        </p>
      </motion.div>

      <div className="skills-container" ref={ref}>
        {skills.map((skill) => (
          <Skill key={skill.name} image={skill.image} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
