import { motion } from "motion/react";

import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="Hero" id="home">
      <motion.div className="Hero__headline">
        <motion.h1>{splitLetter("Software Developer")}</motion.h1>

        <motion.p>
          Designing and building efficient software solutions. I focus on clean
          architecture, performance, and writing scalable, maintainable code.
        </motion.p>

        <motion.a href="#about" className="Hero__link">
          About Me
          <span className="Hero__link-icon">
            <ArrowIcon />
          </span>
        </motion.a>
      </motion.div>

      <div className="Hero__image">
        <img
          src={assets.DevelopmentImage}
          alt="Development Illustration"
          loading="lazy"
        />
        <span className="Hero__dot">.</span>
      </div>
    </section>
  );
};

export default Hero;
