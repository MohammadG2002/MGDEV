import "./Home.css";
import sections from "../../components/home/sections";

const Home = () => {
  return (
    <div className="snap-container">
      {sections.map((section) => (
        <div key={section.id} className="snap-section">
          <section.component key={section.id} />
        </div>
      ))}
    </div>
  );
};

export default Home;
