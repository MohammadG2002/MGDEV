import Skill from "./Skill/Skill";
import skills from "./skills";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="snap-section skills" id="skills">
      <div className="skills-description">
        <h2>My Skills</h2>
        <p>
          Here are some of the skills I have acquired over the years in my
          professional journey.
        </p>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <Skill key={skill.name} image={skill.image} name={skill.name} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
