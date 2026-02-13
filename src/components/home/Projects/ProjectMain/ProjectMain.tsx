import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import "./ProjectMain.css";
import splitLetter from "../../../../utils/splitLetter";
import { motion } from "motion/react";

const ProjectMain = () => {
  return (
    <div className="project-main">
      <motion.div className="project__main-header">
        <motion.h1>{splitLetter("My Projects")}</motion.h1>
        <motion.p>
          This section presents an overview of projects I have worked on,
          demonstrating a range of skills, tools, and development approaches.
        </motion.p>
        <motion.button>
          View Projects{" "}
          <span>
            <ArrowRight />
          </span>
        </motion.button>
      </motion.div>
      <div className="ref"></div>
    </div>
  );
};

export default ProjectMain;
