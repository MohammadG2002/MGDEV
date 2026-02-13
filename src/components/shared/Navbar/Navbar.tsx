import LogoIcon from "../../../assets/icons/develop.svg?react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <HashLink to="#home" className="navbar__logo">
        <LogoIcon />
        MGDev
      </HashLink>

      <div className="navbar__links">
        {NavItems.map((item) => (
          <HashLink
            key={item.name}
            to={item.href}
            className="navbar__link"
            smooth
          >
            {item.name}
          </HashLink>
        ))}
      </div>

      <HashLink to="#contact" className="navbar__contact">
        Contact
      </HashLink>
    </nav>
  );
};

export default Navbar;
