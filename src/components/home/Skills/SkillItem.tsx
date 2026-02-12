import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Skill from "./Skill/Skill";
import type { FC, SVGProps } from "react";

interface SkillItemProps {
  image: FC<SVGProps<SVGSVGElement>>;
  name: string;
  index: number;
}

const SkillItem = ({ image, name, index }: SkillItemProps) => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, {
    amount: 0.5,
    margin: "0px 0px 500px 0px",
  });

  return (
    <motion.div
      ref={skillRef}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{
        delay: isInView ? index * 0.1 + 1 : 0,
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <Skill image={image} name={name} />
    </motion.div>
  );
};

export default SkillItem;
