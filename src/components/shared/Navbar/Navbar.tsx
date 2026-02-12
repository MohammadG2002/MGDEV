import LogoIcon from "../../../assets/icons/develop.svg?react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HashLink to="#home" className="navbar-logo">
        <LogoIcon />
        MGDev
      </HashLink>

      <HashLink to="#contact" className="contact-link">
        Contact
      </HashLink>
    </nav>
  );
};

export default Navbar;
