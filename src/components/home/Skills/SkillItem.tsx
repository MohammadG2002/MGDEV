import { motion } from "motion/react";
import Skill from "./Skill/Skill";
import type { FC, SVGProps } from "react";
import { useStaggeredInView } from "../../../hooks/useStaggeredInView";

interface SkillItemProps {
  image: FC<SVGProps<SVGSVGElement>>;
  name: string;
  index: number;
}

const SkillItem = ({ image, name, index }: SkillItemProps) => {
  const { ref, createItemProps } = useStaggeredInView({
    staggerDelay: 0.1,
  });

  return (
    <motion.div ref={ref} {...createItemProps(index)} className="skill-item">
      <Skill image={image} name={name} />
    </motion.div>
  );
};

export default SkillItem;
