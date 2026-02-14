import { motion } from "motion/react";
import assets from "../../../assets/assets";
import "./ProjectBuildSync.css";
import ProjectHeadline from "../ProjectHeadline/ProjectHeadline";
import findProject from "../../../utils/findProject";

const ProjectBuildSync = () => {
  const data = findProject("buildsync");
  if (!data) return null;
  return (
    <section className="buildsync-sec" id="buildsync">
      <motion.img
        src={assets.buildsynciPad}
        alt="BuildSync on iPad"
        className="ipad"
      />
      <ProjectHeadline {...data} />
    </section>
  );
};

export default ProjectBuildSync;
