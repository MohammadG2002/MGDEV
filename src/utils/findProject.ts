import projectsData from "../components/projects/projectsData";

const findProject = (id: string) => {
  const data = projectsData.find((project) => project.id === id);
  if (!data) return null;
  return data;
};

export default findProject;
