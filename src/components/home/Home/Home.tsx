import { motion, useScroll, useTransform } from "motion/react";
import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import { useRef } from "react";
import useParallax from "../../../hooks/useParallax";
import "./Home.css";
import { useScrollSpring } from "../../../hooks/useScrollSpring";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });
  const fadeHeader = useTransform(slowProgress, [0, 0.1, 0.5], [0, 0, 1]);
  const fadeContent = useTransform(slowProgress, [0, 0.25, 0.5], [0, 0, 1]);
  const fadeLinks = useTransform(slowProgress, [0, 0.4, 0.5], [0, 0, 1]);
  return (
    <section className="snap-section home" id="home">
      <motion.div className="headline-underline" style={{ y }}>
        <div className="hero">
          <div className="headline">
            <motion.h1
              className="headline-header"
              style={{ opacity: fadeHeader }}
            >
              {splitLetter("Frontend")} <br />
              {splitLetter("Software Developer")}{" "}
            </motion.h1>
          </div>
        </div>
        <div className="headline-content">
          <div className="subheadline">
            <motion.p style={{ opacity: fadeContent }}>
              Designing and developing modern web experiences. <br />
              I focus on usability, clean interfaces, <br />
              and writing scalable front-end code.
            </motion.p>
          </div>
          <motion.a
            href="#about"
            className="about-link"
            style={{ opacity: fadeLinks }}
          >
            About Me{" "}
            <span>
              <ArrowIcon />
            </span>
          </motion.a>
        </div>
      </motion.div>

      <div className="hero-img" ref={ref}>
        <img src={assets.DevelopmentImage} alt="Development Illustration" />
        <p className="dot">.</p>
      </div>
    </section>
  );
};

export default Home;
