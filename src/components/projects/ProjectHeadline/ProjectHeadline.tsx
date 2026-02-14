import { Link } from "react-router-dom";
import { motion } from "motion/react";
import splitLetter from "../../../utils/splitLetter";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";
import "./ProjectHeadline.css";
import type { Project } from "../../../types/projectsDataTypes";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

const ProjectHeadline = ({ header, description, code, demo }: Project) => {
  const { ref, headerProps, contentProps, linksProps } = useStaggeredInView({
    staggerDelay: 0.15,
  });
  return (
    <div className="project-headline" ref={ref}>
      <motion.h1 {...headerProps}>{splitLetter(header)}</motion.h1>
      <motion.p {...contentProps}>{description}</motion.p>

      <motion.div className="project-headline__links" {...linksProps}>
        {code && (
          <Link
            to={code}
            target="_blank"
            rel="noopener noreferrer"
            className="project-headline__code"
          >
            View the code{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        )}
        {demo && (
          <Link
            to={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-headline__demo"
          >
            Enter the demo{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectHeadline;
