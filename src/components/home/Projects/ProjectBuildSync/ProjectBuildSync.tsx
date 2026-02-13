import { useRef } from "react";
import "./ProjectBuildSync.css";
import type { MotionValue } from "motion";
import { motion, useScroll, useTransform } from "motion/react";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";
import { useScrollSpring } from "../../../../hooks/useScrollSpring";
import { useSlideProgress } from "../../../../hooks/useSlideProgress";
import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import { useFadeAnimation } from "../../../../hooks/useFadeAnimation";
import useParallax from "../../../../hooks/useParallax";

interface ProjectBuildSyncProps {
  id: number;
}

const ProjectBuildSync = ({ id }: ProjectBuildSyncProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });

  // Transform to phone movement
  const phoneX = useTransform(slowProgress, [0, 1], [150, 0]);
  const { fadeHeaderX, fadeContentX, fadeLinksX } =
    useFadeAnimation(slowProgress);
  return (
    <div className="project__buildsync">
      <motion.div
        className="project__buildsync-images"
        style={{ x: phoneX, opacity: fadeHeaderX }}
      >
        <img
          src={assets.iPad}
          alt="BuildSync on iPad"
          className="buildsync-ipad"
        />
      </motion.div>
      <div className="project__buildsync-header" ref={ref}>
        <motion.h1 style={{ opacity: fadeHeaderX }}>
          {" "}
          {splitLetter("BuildSync")}
        </motion.h1>
        <motion.p style={{ opacity: fadeContentX }}>
          BuildSync is a full-stack project management system built with
          <strong> React</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>.<br />
          It is tailored for engineering workflows, supporting project
          scheduling, task dependencies, and execution planning, with a focus on
          practical system architecture and responsive user interfaces.
        </motion.p>
        <motion.div className="links" style={{ opacity: fadeLinksX }}>
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
