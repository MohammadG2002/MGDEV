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
        src={assets.iPad}
        alt="BuildSync on iPad"
        className="mgdev-sec__ipad"
      />
      <div className="mgdev-sec__headline">
        <motion.h1> {splitLetter("BuildSync")}</motion.h1>
        <motion.p>
          BuildSync is a full-stack project management system built with
          <strong> React</strong>, <strong>JavaScript</strong>,{" "}
          <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
          <strong>MongoDB</strong>.<br />
          It is tailored for engineering workflows, supporting project
          scheduling, task dependencies, and execution planning, with a focus on
          practical system architecture and responsive user interfaces.
        </motion.p>
        <motion.div className="mgdev-sec__links">
          <Link to="https://github.com/MohammadG2002/BuildSync" target="_blank">
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
