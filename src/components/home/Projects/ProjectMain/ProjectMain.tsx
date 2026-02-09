import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import "./ProjectMain.css";
import splitLetter from "../../../../utils/splitLetter";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useParallax from "../../../../hooks/useParallax";
import { useScrollSpring } from "../../../../hooks/useScrollSpring";
import { useFadeAnimation } from "../../../../hooks/useFadeAnimation";
import { useSlideProgress } from "../../../../hooks/useSlideProgress";

interface projectMainProps {
  id: number;
  onIndexChange?: (index: number) => void;
  scrollProgress: MotionValue<number>;
}
const ProjectMain = ({
  scrollProgress,
  id,
  onIndexChange,
}: projectMainProps) => {
  const { localProgress } = useScrollSpring();

  // Automatically detect when this slide is active
  useSlideProgress(scrollProgress, id, localProgress);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const { slowProgress: slideProgress } = useScrollSpring({ localProgress });
  const { fadeHeader, fadeContent, fadeLinks } = useFadeAnimation(slowProgress);
  const x = useTransform(slideProgress, [0, 1], [100, 0]);
  return (
    <div className="project-main">
      <motion.div className="project__main-header" style={{ y, x }}>
        <motion.h1 style={{ opacity: fadeHeader }}>
          {splitLetter("My Projects")}
        </motion.h1>
        <motion.p style={{ opacity: fadeContent }}>
          This section presents an overview of projects I have worked on,
          demonstrating a range of skills, tools, and development approaches.
        </motion.p>
        <motion.button
          onClick={() => onIndexChange && onIndexChange(id + 1)}
          style={{ opacity: fadeLinks }}
        >
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
