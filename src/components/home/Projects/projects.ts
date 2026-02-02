import ProjectBuildSync from "./ProjectBuildSync/ProjectBuildSync";
import ProjectKanban from "./ProjectKanban/ProjectKanban";
import ProjectMain from "./ProjectMain/ProjectMain";

const projects = [
  {
    component: ProjectMain,
    id: "project-main",
  },
  {
    component: ProjectKanban,
    id: "project-kanban",
  },
  {
    component: ProjectBuildSync,
    id: "project-buildsync",
  },
];

export default projects;
