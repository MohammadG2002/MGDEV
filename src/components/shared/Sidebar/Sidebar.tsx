import { HashLink } from "react-router-hash-link";
import useActiveSection from "../../../hooks/useActiveSection";
import pagination from "./pagination";
import "./Sidebar.css";

const Sidebar = () => {
  const sectionIds = pagination.map((item) => item.path.replace("#", ""));

  const activeId = useActiveSection(sectionIds);

  return (
    <div className="sidebar">
      {pagination.map((item) => {
        const id = item.path.replace("#", "");
        return (
          <HashLink
            key={item.id}
            to={item.path}
            className={`sidebar-item ${activeId === id ? "active" : ""}`}
            smooth
          >
            0{item.page}
          </HashLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
