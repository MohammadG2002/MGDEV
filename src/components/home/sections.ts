import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";

const sections = [
  { component: Home, id: 1 },
  { component: About, id: 2 },
  { component: Skills, id: 3 },
  { component: Projects, id: 4 },
  { component: Contact, id: 5 },
];

export default sections;
