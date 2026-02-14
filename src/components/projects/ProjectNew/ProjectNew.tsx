import "./ProjectNew.css";
import { motion } from "motion/react";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";
import { Link } from "react-router-dom";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";

const ProjectNew = () => {
  return (
    <section className="mgdev-sec" id="portfolio">
      <motion.img
        src={assets.mgdevLaptop}
        alt="MGDEV on Laptop"
        className="laptop"
      />
      <div className="mgdev-sec__headline">
        <motion.h1> {splitLetter("MGDEV")}</motion.h1>
        <motion.p>
          MGDEV is a modern portfolio website built with
          <strong> React</strong>, <strong>Vite</strong>, and{" "}
          <strong>TypeScript</strong>. It showcases my projects and skills with
          a focus on clean architecture, performance optimization, and
          responsive design, enhanced with smooth animations powered by{" "}
          <strong>Framer Motion</strong>.
        </motion.p>

        <motion.div className="mgdev-sec__links">
          <Link to="https://github.com/MohammadG2002/MGDEV" target="_blank">
            View the code{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectNew;
