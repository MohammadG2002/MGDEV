import "./Home.css";
import sections from "../../components/home/sections";
import { useCarousel } from "../../plugins/carousel";
import type { RefObject } from "react";

const Home = () => {
  const { containerRef } = useCarousel(sections.length, {});
  return (
    <div
      className="snap-container"
      ref={containerRef as RefObject<HTMLDivElement>}
    >
      {sections.map((section) => (
        <div key={section.id} className="snap-section">
          <section.component key={section.id} />
        </div>
      ))}
    </div>
  );
};

export default Home;
