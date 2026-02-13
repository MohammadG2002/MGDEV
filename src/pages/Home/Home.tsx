import "./Home.css";
import sections from "../../components/home/sections";

const Home = () => {
  return (
    <div className="home">
      {sections.map((section) => (
        <div key={section.id} className="home__section">
          <section.component />
        </div>
      ))}
    </div>
  );
};

export default Home;
