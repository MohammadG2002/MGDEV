import "./Home.css";
import sections from "../../components/home/sections";
import useMobileDetection from "../../hooks/useMobileDetection";

const Home = () => {
  const isMobile = useMobileDetection();
  return (
    <div className={isMobile ? `home mobile` : `home`}>
      {sections.map((section) => (
        <div key={section.id} className="home__section">
          <section.component />
        </div>
      ))}
    </div>
  );
};

export default Home;
