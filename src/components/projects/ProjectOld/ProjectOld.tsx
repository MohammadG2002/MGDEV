import "./ProjectOld.css";
import { motion } from "motion/react";
import assets from "../../../assets/assets";
import findProject from "../../../utils/findProject";
import ProjectHeadline from "../ProjectHeadline/ProjectHeadline";

const ProjectOld = () => {
  const data = findProject("old");
  if (!data) return null;
  return (
    <section className="old-sec" id="old">
      <motion.img
        src={assets.oldMac}
        alt="Old Portfolio on Mac"
        className="monitor"
      />
      <ProjectHeadline {...data} />
    </section>
  );
};

export default ProjectOld;
