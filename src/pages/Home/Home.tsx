import "./Home.css";
import sections from "../../components/home/sections";
import { useRef } from "react";
import useScrollSnap from "../../hooks/useScrollSnap";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useScrollSnap(heroRef);

  return (
    <div className="snap-container" ref={heroRef}>
      {sections.map((section) => (
        <section.component key={section.id} />
      ))}
    </div>
  );
};

export default Home;
