import About from "./About/About";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero.tsx";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";

const sections = [
  { component: Hero, id: 1 },
  { component: About, id: 2 },
  { component: Skills, id: 3 },
  { component: Projects, id: 4 },
  { component: Contact, id: 5 },
];

export default sections;
