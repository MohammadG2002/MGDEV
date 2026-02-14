import type { Project } from "../../types/projectsDataTypes";

const projectsData: Project[] = [
  {
    id: "mgdev",
    header: "MGDEV",
    description: (
      <>
        MGDEV is a modern portfolio website built with
        <strong> React</strong>, <strong>Vite</strong>, and{" "}
        <strong>TypeScript</strong>. It showcases my projects and skills with a
        focus on clean architecture, performance optimization, and responsive
        design, enhanced with smooth animations powered by{" "}
        <strong>Framer Motion</strong>.
      </>
    ),
    code: "https://github.com/MohammadG2002/MGDEV",
    demo: null,
  },

  {
    id: "buildsync",
    header: "BuildSync",
    description: (
      <>
        BuildSync is a full-stack project management system built with
        <strong> React</strong>, <strong>JavaScript</strong>,{" "}
        <strong>Node.js</strong>, <strong>Express</strong>, and{" "}
        <strong>MongoDB</strong>.<br />
        It is tailored for engineering workflows, supporting project scheduling,
        task dependencies, and execution planning, with a focus on practical
        system architecture and responsive user interfaces.
      </>
    ),
    code: "https://github.com/MohammadG2002/BuildSync",
    demo: null,
  },
  {
    id: "movies",
    header: "ASAL Movies",
    description: (
      <>
        ASAL Movies is the first training project I built during my internship
        at <strong>ASAL Technologies</strong>, developed with{" "}
        <strong>React</strong>, <strong>Vite</strong>, and{" "}
        <strong>JavaScript</strong>.<br />
        It uses the <strong>OMDb public API</strong> to fetch movie data and{" "}
        <strong>localStorage</strong> to save search history. Designed with{" "}
        <strong>Figma</strong>, it features a clean and responsive interface.
      </>
    ),
    code: "https://github.com/MohammadG2002/ASAL-Movies",
    demo: null,
  },

  {
    id: "taskly",
    header: "Taskly",
    description: (
      <>
        Taskly is the second training project I built during my internship at{" "}
        <strong>ASAL Technologies</strong>, and my first project working in a
        <strong> collaborative team</strong>, developed with{" "}
        <strong>React</strong>, <strong>Vite</strong>, and{" "}
        <strong>TypeScript</strong>.<br />
        It uses ready-made packages to improve functionality and mock data to
        simulate Kanban tasks and user authentication, focusing on clear
        structure and teamwork.
      </>
    ),
    code: "https://github.com/MohammadG2002/Taskly",
    demo: "https://taskly-asal.vercel.app",
  },
  {
    id: "old",
    header: "Old Portfolio",
    description: (
      <>
        Old Portfolio is a simple portfolio website built with
        <strong> HTML</strong>, <strong>CSS</strong>, and{" "}
        <strong>JavaScript</strong>. It features a basic design and serves as my
        first portfolio page, showcasing my initial projects and learning
        experience.
      </>
    ),
    code: "https://github.com/MohammadG2002/Portfolio",
    demo: "https://mohammadg2002.github.io/Portfolio/",
  },
];

export default projectsData;
