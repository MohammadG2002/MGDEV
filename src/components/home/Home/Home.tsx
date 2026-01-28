import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";
import "./Home.css";
import { HashLink } from "react-router-hash-link";
import assets from "../../../assets/assets";
import splitLetter from "../../../utils/splitLetter";

const Home = () => {
  return (
    <section className="snap-section home" id="home">
      <div className="hero">
        <div className="headline">
          <h1>{splitLetter("Frontend ")}</h1>
          <h1>{splitLetter("Software Developer")}</h1>
        </div>

        <div className="subheadline">
          <p>Designing and developing modern web experiences.</p>
          <p>I focus on usability, clean interfaces,</p>
          <p>and writing scalable front-end code.</p>
        </div>

        <HashLink to="#about" className="about-link">
          About Me{" "}
          <span>
            <ArrowIcon />
          </span>
        </HashLink>
      </div>
      <div className="hero-img">
        <img src={assets.DevelopmentImage} alt="Development Illustration" />
        <p className="dot">.</p>
      </div>
    </section>
  );
};

export default Home;
