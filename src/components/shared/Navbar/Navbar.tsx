import LogoIcon from "../../../assets/icons/develop.svg?react";
import "./Navbar.css";
import { HashLink } from "react-router-hash-link";
import navLinks from "./navLinks";
import useMobileDetection from "../../../hooks/useMobileDetection";
import MobileSidebar from "./MobileSidebar/MobileSidebar";

const Navbar = () => {
  const isMobile = useMobileDetection();
  return (
    <nav className="navbar">
      <HashLink to="#home" className="navbar__logo">
        <LogoIcon />
        MGDev
      </HashLink>

      <div className="navbar__links">
        {navLinks.map((item) => (
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

      {isMobile ? (
        <MobileSidebar />
      ) : (
        <HashLink to="#contact" className="navbar__contact">
          Contact
        </HashLink>
      )}
    </nav>
  );
};

export default Navbar;
