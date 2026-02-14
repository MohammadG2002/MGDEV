import "./ProjectTaskly.css";
import { motion } from "framer-motion";
import assets from "../../../assets/assets";
import ProjectHeadline from "../ProjectHeadline/ProjectHeadline";
import findProject from "../../../utils/findProject";

const ProjectTaskly = () => {
  const data = findProject("taskly");
  if (!data) return null;
  return (
    <section className="taskly-sec" id="taskly">
      <ProjectHeadline {...data} />
      <motion.div className="taskly-sec__images">
        <img
          src={assets.tasklyMac}
          alt="Taskly on Laptop"
          className="taskly-laptop"
        />
        <img
          src={assets.tasklyPhone}
          alt="Taskly on Phone"
          className="taskly-phone"
        />
      </motion.div>
    </section>
  );
};

export default ProjectTaskly;
