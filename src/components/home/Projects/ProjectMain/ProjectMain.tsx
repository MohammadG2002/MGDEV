import React from "react";
import ArrowRight from "../../../../assets/icons/arrow-right.svg?react";
import "./ProjectMain.css";
import splitLetter from "../../../../utils/splitLetter";

interface projectMainProps {
  id: number;
  onIndexChange?: (index: number) => void;
}

const ProjectMain = ({ id, onIndexChange }: projectMainProps) => {
  return (
    <div className="project-main">
      <div className="project__main-header">
        <h1>{splitLetter("My Projects")}</h1>
        <p>
          This section presents an overview of projects I have worked on,
          demonstrating a range of skills, tools, and development approaches.
        </p>
        <a onClick={() => onIndexChange && onIndexChange(id + 1)}>
          View Projects{" "}
          <span>
            <ArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectMain;
