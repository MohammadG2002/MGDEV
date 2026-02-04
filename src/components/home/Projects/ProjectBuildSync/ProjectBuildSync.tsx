import { useRef } from "react";
import "./ProjectBuildSync.css";
import type { MotionValue } from "motion";
import { motion, useTransform } from "motion/react";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";
import { useScrollSpring } from "../../../../hooks/useScrollSpring";
import { useSlideProgress } from "../../../../hooks/useSlideProgress";
import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";

interface ProjectBuildSyncProps {
  scrollProgress: MotionValue<number>;
  id: number;
}

const ProjectBuildSync = ({ scrollProgress, id }: ProjectBuildSyncProps) => {
  const ref = useRef(null);

  const { slowProgress, localProgress } = useScrollSpring();

  // Automatically detect when this slide is active
  useSlideProgress(scrollProgress, id, localProgress);

  // Transform to phone movement
  const phoneX = useTransform(slowProgress, [0, 1], [150, 0]);
  const headerOpacity = useTransform(slowProgress, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity = useTransform(slowProgress, [0, 0.6, 1], [0, 0, 1]);
  const linkOpacity = useTransform(slowProgress, [0, 0.9, 1], [0, 0, 1]);
  return (
    <div className="project__buildsync">
      <motion.div
        className="project__buildsync-images"
        style={{ x: phoneX, opacity: headerOpacity }}
      >
        <img
          src={assets.iPad}
          alt="BuildSync on iPad"
          className="buildsync-ipad"
        />
      </motion.div>
      <div className="project__buildsync-header" ref={ref}>
        <motion.h1 style={{ opacity: headerOpacity }}>
          {" "}
          {splitLetter("BuildSync")}
        </motion.h1>
        <motion.p style={{ opacity: textOpacity }}>
          BuildSync is a full-stack project management system built with
          <strong> React</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>.<br />
          It is tailored for engineering workflows, supporting project
          scheduling, task dependencies, and execution planning, with a focus on
          practical system architecture and responsive user interfaces.
        </motion.p>
        <motion.div className="links" style={{ opacity: linkOpacity }}>
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
