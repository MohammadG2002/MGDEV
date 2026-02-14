import { motion } from "motion/react";
import assets from "../../../assets/assets";
import ProjectHeadline from "../ProjectHeadline/ProjectHeadline";
import findProject from "../../../utils/findProject";
import "./ProjectMovies.css";

const ProjectMovies = () => {
  const data = findProject("movies");
  if (!data) return null;
  return (
    <section className="movies-sec" id="movies">
      <ProjectHeadline {...data} />
      <motion.img
        src={assets.movieTV}
        alt="ASAL Movies on TV"
        className="monitor"
      />
    </section>
  );
};

export default ProjectMovies;
