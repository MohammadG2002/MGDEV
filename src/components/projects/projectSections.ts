import ProjectBuildSync from "./ProjectBuildSync/ProjectBuildSync";
import ProjectMovies from "./ProjectMovies/ProjectMovies";
import ProjectNew from "./ProjectNew/ProjectNew";
import ProjectOld from "./ProjectOld/ProjectOld";
import ProjectTaskly from "./ProjectTaskly/ProjectTaskly";

const projectSections = [
  { component: ProjectNew, id: 1 },
  { component: ProjectBuildSync, id: 2 },
  { component: ProjectMovies, id: 3 },
  { component: ProjectTaskly, id: 4 },
  { component: ProjectOld, id: 5 },
];

export default projectSections;
