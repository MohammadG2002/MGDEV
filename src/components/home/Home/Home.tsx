import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import useParallax from "../../../hooks/useParallax";
import { useScrollSpring } from "../../../hooks/useScrollSpring";

import "./Home.css";

const Home = () => {
  const imageRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: imageRef });
  const y = useParallax(scrollYProgress, 500);
  const { slowProgress } = useScrollSpring({ localProgress: scrollYProgress });

  // Fade animations - start visible at 0.5, fade out to 1
  const fadeHeader = useTransform(slowProgress, [0.5, 0.8], [1, 0]);
  const fadeContent = useTransform(slowProgress, [0.5, 0.7], [1, 0]);
  const fadeLinks = useTransform(slowProgress, [0.5, 0.6], [1, 0]);

  return (
    <section className="home" id="home">
      <motion.div className="home__headline" style={{ y }}>
        <motion.h1 style={{ opacity: fadeHeader }}>
          {splitLetter("Software Developer")}
        </motion.h1>

        <motion.p style={{ opacity: fadeContent }}>
          Designing and building efficient software solutions. I focus on clean
          architecture, performance, and writing scalable, maintainable code.
        </motion.p>

        <motion.a
          href="#about"
          style={{ opacity: fadeLinks }}
          className="home__link"
        >
          About Me
          <span className="home__link-icon">
            <ArrowIcon />
          </span>
        </motion.a>
      </motion.div>

      <div className="home__image" ref={imageRef}>
        <img
          src={assets.DevelopmentImage}
          alt="Development Illustration"
          loading="lazy"
        />
        <span className="home__dot">.</span>
      </div>
    </section>
  );
};

export default Home;
