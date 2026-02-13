import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import "./ProjectMain.css";
import splitLetter from "../../../../utils/splitLetter";
import { motion, MotionValue, useScroll } from "motion/react";
import { useRef } from "react";
import useParallax from "../../../../hooks/useParallax";
import { useScrollSpring } from "../../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../../hooks/useFadeAnimation";

interface projectMainProps {
  id: number;
}
const ProjectMain = ({ id }: projectMainProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { fadeHeader, fadeContent, fadeLinks } = useFadeAnimation(slowProgress);
  return (
    <div className="project-main">
      <motion.div className="project__main-header" style={{ y }}>
        <motion.h1 style={{ opacity: fadeHeader }}>
          {splitLetter("My Projects")}
        </motion.h1>
        <motion.p style={{ opacity: fadeContent }}>
          This section presents an overview of projects I have worked on,
          demonstrating a range of skills, tools, and development approaches.
        </motion.p>
        <motion.button style={{ opacity: fadeLinks }}>
          View Projects{" "}
          <span>
            <ArrowRight />
          </span>
        </motion.button>
      </motion.div>
      <div className="ref" ref={ref}></div>
    </div>
  );
};

export default ProjectMain;
