import "./Skills.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const contents = gsap.utils.toArray("#skills .skill"); // Remove #skills from selector

    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="snap-section skills" id="skills" ref={sectionRef}>
      <div className="skill">1</div>
      <div className="skill">2</div>
      <div className="skill">3</div>
    </section>
  );
};

export default Skills;
