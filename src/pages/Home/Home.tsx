import "./Home.css";
import sections from "../../components/home/sections";
import { useCarousel } from "../../plugins/carousel";

const Home = () => {
  const { containerRef, currentIndex, scrollToIndex, scrollProgress } =
    useCarousel(sections.length, {
      onLastItemScroll: "contact",
      onFirstItemScroll: "skills",
      direction: "horizontal",
    });
  return (
    <div className="snap-container" ref={}>
      {sections.map((section) => (
        <section.component key={section.id} />
      ))}
    </div>
  );
};

export default Home;
