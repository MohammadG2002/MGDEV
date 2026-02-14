import { motion } from "framer-motion";
import splitLetter from "../../../utils/splitLetter";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";
import "./Projects.css";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

const Projects = () => {
  const { ref, headerProps, contentProps, linksProps } = useStaggeredInView({
    staggerDelay: 0.15,
  });
  return (
    <section className="projects-sec" id="projects" ref={ref}>
      <motion.h1 {...headerProps}>{splitLetter("My Projects")}</motion.h1>
      <motion.p {...contentProps}>
        This section presents an overview of projects I have worked on,
        demonstrating a range of skills, tools, and development approaches.
      </motion.p>
      <motion.a href="/projects" {...linksProps}>
        View Projects
        <span>
          <ArrowRight />
        </span>
      </motion.a>
    </section>
  );
};

export default Projects;
