import "./ProjectKanban.css";
import { motion } from "framer-motion";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";
import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";

const ProjectKanban = () => {
  return (
    <div className="project__kanban">
      <div className="project__kanban-header">
        <motion.h1>{splitLetter("Taskly")}</motion.h1>
        <motion.p>
          Taskly is a frontend Kanban-style task management interface built with
          <strong> React </strong>and<strong> TypeScript</strong>. <br /> It
          demonstrates interactive task organization and workflow management
          using mock data, focusing on responsive design and smooth UI
          interactions.
        </motion.p>
        <motion.div className="links">
          <Link
            to="https://github.com/MohammadG2002/Management-Project"
            target="_blank"
            className="code"
          >
            View the code{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
          <Link
            to="https://taskly-virid.vercel.app"
            target="_blank"
            className="demo"
          >
            Enter the demo{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </motion.div>
      </div>
      <motion.div className="project__kanban-images">
        <img
          src={assets.tasklyLaptop}
          alt="Taskly on Laptop"
          className="taskly-laptop"
        />
        <motion.div className="phone-container">
          <img
            src={assets.tasklyPhone}
            alt="Taskly on Phone"
            className="taskly-phone"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectKanban;
