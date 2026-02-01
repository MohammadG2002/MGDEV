"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import projects from "./projects";
import "./Projects.css";

const ITEM_WIDTH = 400;
const GAP = 30;

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (projects.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="projects">
      <div ref={containerRef} className="scroll-container">
        <div className="sticky-wrapper">
          <motion.div className="gallery" style={{ x }}>
            {projects.map((project) => (
              <div key={project.id} className="gallery-item">
                <div className="item-content">
                  <span className="item-number">0{project.id}</span>
                  <h2>{project.label}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
