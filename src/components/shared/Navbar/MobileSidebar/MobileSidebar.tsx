import { HashLink } from "react-router-hash-link";
import navLinks from "../navLinks";
import { useMobileSidebar } from "./useMobileSidebar";
import HamburgerIcon from "../../../../assets/icons/HamburgerIcon.svg?react";
import "./MobileSidebar.css";

const MobileSidebar = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useMobileSidebar();

  return (
    <>
      <button
        className="mobile-sidebar__toggle"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <HamburgerIcon />
      </button>

      {isOpen && (
        <div className="mobile-sidebar__overlay" onClick={closeSidebar} />
      )}

      <aside
        className={`mobile-sidebar ${isOpen ? "mobile-sidebar--open" : ""}`}
      >
        <div className="mobile-sidebar__content">
          <nav className="mobile-sidebar__nav">
            {navLinks.map((item) => (
              <HashLink
                key={item.name}
                to={item.href}
                className="mobile-sidebar__link"
                onClick={closeSidebar}
                smooth
              >
                {item.name}
              </HashLink>
            ))}
          </nav>

          <HashLink
            to="/home/#contact"
            className="mobile-sidebar__contact"
            onClick={closeSidebar}
            smooth
          >
            Contact
          </HashLink>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;
