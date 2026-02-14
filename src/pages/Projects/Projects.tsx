import projectSections from "../../components/projects/projectSections";
import useMobileDetection from "../../hooks/useMobileDetection";
import "./Projects.css";

const Projects = () => {
  const isMobile = useMobileDetection();
  return (
    <div className={isMobile ? `projects mobile` : `projects`}>
      {projectSections.map((section) => (
        <div key={section.id} className="projects__section">
          <section.component />
        </div>
      ))}
    </div>
  );
};

export default Projects;
