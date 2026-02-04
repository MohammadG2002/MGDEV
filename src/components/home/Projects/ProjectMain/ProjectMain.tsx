import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import "./ProjectMain.css";
import splitLetter from "../../../../utils/splitLetter";
import { motion, MotionValue } from "motion/react";

interface projectMainProps {
  id: number;
  onIndexChange?: (index: number) => void;
  scrollProgress: MotionValue<number>;
}

const ProjectMain = ({ id, onIndexChange }: projectMainProps) => {
  return (
    <div className="project-main">
      <div className="project__main-header">
        <motion.h1>{splitLetter("My Projects")}</motion.h1>
        <motion.p>
          This section presents an overview of projects I have worked on,
          demonstrating a range of skills, tools, and development approaches.
        </motion.p>
        <motion.button onClick={() => onIndexChange && onIndexChange(id + 1)}>
          View Projects{" "}
          <span>
            <ArrowRight />
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default ProjectMain;
