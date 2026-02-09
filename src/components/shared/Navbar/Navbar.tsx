import LogoIcon from "../../../assets/icons/develop.svg?react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar">
      <HashLink to="#home" className="navbar-logo">
        <LogoIcon /> MGDev
      </HashLink>
      <div className="contact">
        <HashLink to="#contact" className="contact-link">
          Contact
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
