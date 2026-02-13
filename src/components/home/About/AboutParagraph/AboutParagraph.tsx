import { motion } from "motion/react";
import type { AboutParagraphsTypes } from "../../../../types/AboutParagraphsTypes";
import "./AboutParagraph.css";
import { useStaggeredInView } from "../../../../hooks/useStaggeredInView";

interface AboutParagraphProps {
  paragraph: AboutParagraphsTypes;
  index: number;
}
const AboutParagraph = ({ paragraph, index }: AboutParagraphProps) => {
  const { ref, createItemProps } = useStaggeredInView({
    baseDelay: 0,
    staggerDelay: 0.15,
  });
  return (
    <motion.div
      ref={ref}
      {...createItemProps(index)}
      className="about__paragraph"
    >
      <h2>{paragraph.title}</h2>
      <p>{paragraph.content}</p>
    </motion.div>
  );
};

export default AboutParagraph;
