import navLinks from "./navLinks";
import LogoIcon from "../../../assets/icons/develop.svg?react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar">
      <HashLink to="#home" className="navbar-logo">
        <LogoIcon /> MGDev
      </HashLink>
      <div className="navbar-links">
        {navLinks.map((link) => (
          <HashLink key={link.name} to={link.path} className="navbar-link">
            {link.name}
          </HashLink>
        ))}
      </div>
      <div className="contact">
        <HashLink to="#contact" className="contact-link">
          Contact
        </HashLink>
      </div>
    </div>
  );
};

export default Navbar;
