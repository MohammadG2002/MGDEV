import { motion } from "motion/react";
import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import "./Hero.css";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

const hero = () => {
  const { ref, headerProps, contentProps, linksProps } = useStaggeredInView({
    baseDelay: 0,
    staggerDelay: 0.15,
  });
  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero__headline">
        <motion.h1 {...headerProps}>
          {splitLetter("Software Developer")}
        </motion.h1>

        <motion.p {...contentProps}>
          Designing and building efficient software solutions. I focus on clean
          architecture, performance, and writing scalable, maintainable code.
        </motion.p>

        <motion.a href="#about" {...linksProps}>
          About Me
          <span className="hero__link-icon">
            <ArrowIcon />
          </span>
        </motion.a>
      </div>

      <div className="hero__image">
        <img
          src={assets.DevelopmentImage}
          alt="Development Illustration"
          loading="lazy"
        />
        <span className="hero__dot">.</span>
      </div>
    </section>
  );
};

export default hero;
