import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import useParallax from "../../../hooks/useParallax";
import { useScrollSpring } from "../../../hooks/useScrollSpring";

import "./Home.css";

const Home = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });

  const fadeHeader = useTransform(slowProgress, [0, 0.1, 0.5], [0, 0, 1]);
  const fadeContent = useTransform(slowProgress, [0, 0.25, 0.5], [0, 0, 1]);
  const fadeLinks = useTransform(slowProgress, [0, 0.4, 0.5], [0, 0, 1]);

  return (
    <div className="home-container" id="home">
      <motion.div className="headline-container" style={{ y }}>
        <motion.h1 style={{ opacity: fadeHeader }}>
          {splitLetter("Software Developer")}{" "}
        </motion.h1>

        <motion.p style={{ opacity: fadeContent }}>
          Designing and building efficient software solutions. I focus on clean
          architecture, performance, and writing scalable, maintainable code.
        </motion.p>

        <motion.a href="#about" style={{ opacity: fadeLinks }}>
          About Me{" "}
          <span>
            <ArrowIcon />
          </span>
        </motion.a>
      </motion.div>

      <div className="hero-image" ref={ref}>
        <img src={assets.DevelopmentImage} alt="Development Illustration" />
        <p className="dot">.</p>
      </div>
    </div>
  );
};

export default Home;
