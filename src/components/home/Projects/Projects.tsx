import projects from "./projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__list">
        {projects.map((project) => (
          <project.component key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
