import React from "react";
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
          I've built a variety of projects tailored to different aspects of each
          client's business. If you'd like to see more examples beyond what's
          showcased here, feel free to get in touch — I'd be happy to share.
        </p>
        <button onClick={() => onIndexChange && onIndexChange(1)}>
          View Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectMain;
