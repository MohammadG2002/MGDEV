import "./ProjectBuildSync.css";
import { motion } from "motion/react";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";
import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
interface ProjectBuildSyncProps {
  id: number;
}

const ProjectBuildSync = ({ id }: ProjectBuildSyncProps) => {
  return (
    <div className="project__buildsync">
      <motion.div className="project__buildsync-images">
        <img
          src={assets.iPad}
          alt="BuildSync on iPad"
          className="buildsync-ipad"
        />
      </motion.div>
      <div className="project__buildsync-header">
        <motion.h1> {splitLetter("BuildSync")}</motion.h1>
        <motion.p>
          BuildSync is a full-stack project management system built with
          <strong> React</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>.<br />
          It is tailored for engineering workflows, supporting project
          scheduling, task dependencies, and execution planning, with a focus on
          practical system architecture and responsive user interfaces.
        </motion.p>
        <motion.div className="links">
          <Link to="https://github.com/MohammadG2002/BuildSync" target="_blank">
            View the code{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectBuildSync;
