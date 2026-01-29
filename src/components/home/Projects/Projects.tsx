import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contents = gsap.utils.toArray(".project");

    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.1,
        end: () => `+=${sectionRef.current?.offsetWidth}`,
        snap: {
          snapTo: 1 / (contents.length - 1),
          duration: 2,
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="snap-section projects" id="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="project">Project 1</div>
        <div className="project">Project 2</div>
        <div className="project">Project 3</div>
        <div className="project">Project 4</div>
      </div>
    </section>
  );
};

export default Projects;
