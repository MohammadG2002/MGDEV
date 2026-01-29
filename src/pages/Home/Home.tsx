import "./Home.css";
import sections from "../../components/home/sections";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <div className="snap-container">
      {sections.map((section) => (
        <section.component key={section.id} />
      ))}
    </div>
  );
};

export default Home;
