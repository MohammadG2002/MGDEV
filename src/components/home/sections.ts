import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

const sections = [
  { component: Home, id: "home" },
  { component: About, id: "about" },
  { component: Skills, id: "skills" },
  { component: Projects, id: "projects" },
  { component: Contact, id: "contact" },
];

export default sections;
