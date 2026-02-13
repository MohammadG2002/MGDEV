import { motion } from "framer-motion";
import splitLetter from "../../../utils/splitLetter";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <motion.h1>{splitLetter("My Projects")}</motion.h1>
      <motion.p>
        This section presents an overview of projects I have worked on,
        demonstrating a range of skills, tools, and development approaches.
      </motion.p>
      <motion.a href="/projects">
        View Projects
        <span>
          <ArrowRight />
        </span>
      </motion.a>
    </section>
  );
};

export default Projects;
