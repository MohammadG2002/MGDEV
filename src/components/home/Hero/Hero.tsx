import { motion } from "motion/react";
import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import "./Hero.css";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

const Hero = () => {
  const { ref, headerProps, contentProps, linksProps } = useStaggeredInView({
    baseDelay: 0,
    staggerDelay: 0.15,
  });
  return (
    <section className="Hero" id="home" ref={ref}>
      <div className="Hero__headline">
        <motion.h1 {...headerProps}>
          {splitLetter("Software Developer")}
        </motion.h1>

        <motion.p {...contentProps}>
          Designing and building efficient software solutions. I focus on clean
          architecture, performance, and writing scalable, maintainable code.
        </motion.p>

        <motion.a href="#about" {...linksProps}>
          About Me
          <span className="Hero__link-icon">
            <ArrowIcon />
          </span>
        </motion.a>
      </div>

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
