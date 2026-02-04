import { useRef } from "react";
import "./ProjectKanban.css";
import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";
import { useScrollSpring } from "../../../../hooks/useScrollSpring";
import { useSlideProgress } from "../../../../hooks/useSlideProgress";

interface projectKanbanProps {
  scrollProgress: MotionValue<number>;
  id: number; // Make sure you're passing this from Projects.tsx
}

const ProjectKanban = ({ scrollProgress, id }: projectKanbanProps) => {
  const ref = useRef(null);
  const { slowProgress, localProgress } = useScrollSpring();

  // Automatically detect when this slide is active
  useSlideProgress(scrollProgress, id, localProgress);

  // Transform to phone movement
  const phoneX = useTransform(slowProgress, [0, 1], [-150, 0]);
  const headerOpacity = useTransform(slowProgress, [0, 0.3, 1], [0, 0, 1]);
  const textOpacity = useTransform(slowProgress, [0, 0.6, 1], [0, 0, 1]);

  return (
    <div className="project__kanban">
      <div className="project__kanban-header">
        <motion.h1 style={{ opacity: headerOpacity }}>
          {splitLetter("Taskly")}
        </motion.h1>
        <motion.p style={{ opacity: textOpacity }}>
          Taskly is a frontend Kanban-style task management interface built with
          <strong> React </strong>and<strong> TypeScript</strong>. <br /> It
          demonstrates interactive task organization and workflow management
          using mock data, focusing on responsive design and smooth UI
          interactions.
        </motion.p>
      </div>
      <motion.div
        className="project__kanban-images"
        ref={ref}
        style={{ opacity: headerOpacity }}
      >
        <img
          src={assets.tasklyLaptop}
          alt="Taskly on Laptop"
          className="taskly-laptop"
        />
        <motion.div
          className="phone-container"
          style={{ x: phoneX, opacity: headerOpacity }}
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
