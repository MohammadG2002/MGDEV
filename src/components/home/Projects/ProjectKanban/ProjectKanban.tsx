import { useRef, useEffect } from "react";
import "./ProjectKanban.css";
import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import type { MotionValue } from "framer-motion";
import assets from "../../../../assets/assets";
import splitLetter from "../../../../utils/splitLetter";

interface projectKanbanProps {
  scrollProgress: MotionValue<number>;
  id: number;
}

const ProjectKanban = ({ scrollProgress }: projectKanbanProps) => {
  const ref = useRef(null);

  const localProgress = useMotionValue(0);
  const smoothProgress = useSpring(localProgress, {
    stiffness: 60,
    damping: 20,
  });

  // Transform to phone movement
  const phoneX = useTransform(smoothProgress, [0, 1], [0, -300]);
  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (currentSlide) => {
      if (currentSlide === 1) {
        localProgress.set(0);
      } else {
        localProgress.set(1);
      }
    });

    return () => unsubscribe();
  }, [scrollProgress]);

  return (
    <div className="project-kanban">
      <div className="project__kanban-header">
        <h1> {splitLetter("Taskly")}</h1>
        <p>
          Taskly is a frontend Kanban-style task management interface built with
          <strong> React </strong>and<strong> TypeScript</strong>. <br /> It
          demonstrates interactive task organization and workflow management
          using mock data, focusing on responsive design and smooth UI
          interactions.
        </p>
      </div>
      <div className="project__kanban-images" ref={ref}>
        <img
          src={assets.tasklyLaptop}
          alt="Taskly on Laptop"
          className="taskly-laptop"
        />
        <motion.div className="phone-container" style={{ x: phoneX }}>
          <img
            src={assets.tasklyPhone}
            alt="Taskly on Phone"
            className="taskly-phone"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectKanban;
