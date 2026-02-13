import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import "./ProjectMain.css";
import splitLetter from "../../../../utils/splitLetter";
import { motion } from "motion/react";

const ProjectMain = () => {
  return (
    <div className="project-main">
      <motion.div className="project-main__header">
        <motion.h1 className="project-main__title">
          {splitLetter("My Projects")}
        </motion.h1>
        <motion.p className="project-main__description">
          This section presents an overview of projects I have worked on,
          demonstrating a range of skills, tools, and development approaches.
        </motion.p>
        <motion.button className="project-main__button">
          View Projects{" "}
          <span className="project-main__button-icon">
            <ArrowRight />
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectMain;
