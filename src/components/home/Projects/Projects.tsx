import projects from "./projects";
import { useCarousel, CarouselPagination } from "../../../plugins/carousel";
import { type RefObject } from "react";
import "./Projects.css";
const Projects = () => {
  const { containerRef, currentIndex, scrollToIndex, scrollProgress } =
    useCarousel(projects.length, {
      onLastItemScroll: "contact",
      onFirstItemScroll: "skills",
      direction: "horizontal",
    });

  return (
    <section className="projects-container" id="projects">
      <div className="projects-underline" style={{ position: "relative" }}>
        <div
          className="projects"
          ref={containerRef as RefObject<HTMLDivElement>}
        >
          {projects.map((project, index) => (
            <project.component
              key={project.id}
              onIndexChange={scrollToIndex}
              id={index}
              scrollProgress={scrollProgress}
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
