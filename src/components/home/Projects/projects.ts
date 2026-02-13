import ProjectBuildSync from "./ProjectBuildSync/ProjectBuildSync";
import ProjectKanban from "./ProjectKanban/ProjectKanban";
import ProjectMain from "./ProjectMain/ProjectMain";

const projects = [
  {
    id: 1,
    component: ProjectMain,
  },
  {
    id: 2,
    component: ProjectKanban,
  },
  {
    id: 3,
    component: ProjectBuildSync,
  },
];

export default projects;
