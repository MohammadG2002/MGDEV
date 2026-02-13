import projects from "./projects";
import "./Projects.css";
const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects">
        {projects.map((project) => (
          <project.component key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
