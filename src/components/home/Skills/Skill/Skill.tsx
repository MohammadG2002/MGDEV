import { type FC, type SVGProps } from "react";
import "./Skill.css";

interface SkillProps {
  image: FC<SVGProps<SVGSVGElement>>;
  name: string;
}

const Skill = ({ image: Image, name }: SkillProps) => {
  return (
    <div className="skill">
      <Image className="skill__image" aria-label={name} />
      <p className="skill__name">{name}</p>
    </div>
  );
};

export default Skill;
