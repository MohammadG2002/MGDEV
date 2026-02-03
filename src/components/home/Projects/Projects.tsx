import "./Projects.css";
import projects from "./projects";
import { useCarousel, CarouselPagination } from "../../../plugins/carousel";

const Projects = () => {
  const { containerRef, currentIndex, scrollToIndex, scrollProgress } =
    useCarousel(projects.length, {
      onLastItemScroll: "contact",
      onFirstItemScroll: "skills",
      direction: "horizontal",
    });

  return (
    <section className="snap-section projects" id="projects">
      <div className="projects-underline" style={{ position: "relative" }}>
        <div
          className="projects-container"
          ref={containerRef as React.RefObject<HTMLDivElement>}
        >
          {projects.map((project, index) => (
            <project.component
              key={project.id}
              onIndexChange={scrollToIndex}
              id={index}
              scrollProgress={scrollProgress} // Pass it down
            />
          ))}
        </div>
        <CarouselPagination
          itemCount={projects.length}
          currentIndex={currentIndex}
          onIndexChange={scrollToIndex}
        />
      </div>
    </section>
  );
};

export default Projects;
