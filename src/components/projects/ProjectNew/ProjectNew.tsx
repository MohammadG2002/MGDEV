import "./ProjectNew.css";
import { motion } from "motion/react";
import assets from "../../../assets/assets";
import ProjectHeadline from "../ProjectHeadline/ProjectHeadline";
import findProject from "../../../utils/findProject";

const ProjectNew = () => {
  const data = findProject("mgdev");
  if (!data) return null;
  return (
    <section className="mgdev-sec" id="portfolio">
      <ProjectHeadline {...data} />
      <motion.img
        src={assets.mgdevLaptop}
        alt="MGDEV on Laptop"
        className="monitor"
      />
    </section>
  );
};

export default ProjectNew;
