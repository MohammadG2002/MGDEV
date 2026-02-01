"use client";
import { motion, useScroll } from "motion/react";
import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import { HashLink } from "react-router-hash-link";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import { useRef } from "react";
import useParallax from "../../../hooks/useParallax";
import "./Home.css";

const Home = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 500);
  return (
    <section className="snap-section home" id="home">
      <motion.div className="headline-underline" style={{ y }}>
        <div className="hero">
          <div className="headline">
            <h1 className="headline-header">
              {splitLetter("Frontend")} <br />
              {splitLetter("Software Developer")}{" "}
            </h1>
          </div>
        </div>
        <div className="headline-content">
          <div className="subheadline">
            <p>
              Designing and developing modern web experiences. <br />
              I focus on usability, clean interfaces, <br />
              and writing scalable front-end code.
            </p>
          </div>

          <HashLink to="#about" className="about-link">
            About Me{" "}
            <span>
              <ArrowIcon />
            </span>
          </HashLink>
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
