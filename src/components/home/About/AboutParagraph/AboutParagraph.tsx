import type { AboutParagraphsTypes } from "../../../../types/AboutParagraphsTypes";
import "./AboutParagraph.css";

interface AboutParagraphProps {
  paragraph: AboutParagraphsTypes;
}
const AboutParagraph = ({ paragraph }: AboutParagraphProps) => {
  return (
    <div className="about__paragraph">
      <h2>{paragraph.title}</h2>
      <p>{paragraph.content}</p>
    </div>
  );
};

export default AboutParagraph;
