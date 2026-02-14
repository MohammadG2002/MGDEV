import projectSections from "../../components/projects/projectSections";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      {projectSections.map((section) => (
        <div key={section.id} className="projects__section">
          <section.component />
        </div>
      ))}
    </div>
  );
};

export default Projects;
