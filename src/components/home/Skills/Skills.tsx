import React, { useRef } from "react";
import useHorizontalScroll from "../../../hooks/useHorizontalScroll";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef<HTMLElement>(null);
  useHorizontalScroll(skillsRef);
  return (
    <section className="snap-section skills" id="skills" ref={skillsRef}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </section>
  );
};

export default Skills;
