import { useRef } from "react";
import "./ProjectKanban.css";
import { motion, useScroll, useTransform } from "framer-motion";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";
import { useScrollSpring } from "../../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../../hooks/useFadeAnimation";
import { Link } from "react-router-dom";
import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import useParallax from "../../../../hooks/useParallax";

interface projectKanbanProps {
  id: number;
}

const ProjectKanban = ({ id }: projectKanbanProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { fadeHeaderX, fadeContentX, fadeLinksX } =
    useFadeAnimation(slowProgress);
  const phoneX = useTransform(slowProgress, [0, 1], [150, 0]);

  return (
    <div className="project__kanban">
      <div className="project__kanban-header">
        <motion.h1 style={{ opacity: fadeHeaderX }}>
          {splitLetter("Taskly")}
        </motion.h1>
        <motion.p style={{ opacity: fadeContentX }}>
          Taskly is a frontend Kanban-style task management interface built with
          <strong> React </strong>and<strong> TypeScript</strong>. <br /> It
          demonstrates interactive task organization and workflow management
          using mock data, focusing on responsive design and smooth UI
          interactions.
        </motion.p>
        <motion.div className="links" style={{ opacity: fadeLinksX }}>
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
      <motion.div
        className="project__kanban-images"
        ref={ref}
        style={{ opacity: fadeHeaderX }}
      >
        <img
          src={assets.tasklyLaptop}
          alt="Taskly on Laptop"
          className="taskly-laptop"
        />
        <motion.div
          className="phone-container"
          style={{ x: phoneX, opacity: fadeContentX }}
        >
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
