import "./Skills.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contents = gsap.utils.toArray(".skill");

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
    <section className="snap-section skills" id="skills" ref={sectionRef}>
      <div className="skills-container">
        <div className="skill">1</div>
        <div className="skill">2</div>
        <div className="skill">3</div>
      </div>
    </section>
  );
};

export default Skills;
