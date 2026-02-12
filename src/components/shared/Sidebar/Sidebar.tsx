import { HashLink } from "react-router-hash-link";
import useActiveSection from "../../../hooks/useActiveSection";
import { useMobileDetection } from "../../../hooks/useMobileDetection";
import pagination from "./pagination";
import "./Sidebar.css";

const Sidebar = () => {
  const sectionIds = pagination.map((item) => item.path.replace("#", ""));

  const activeId = useActiveSection(sectionIds);
  const isMobile = useMobileDetection();

  if (isMobile) return null;

  return (
    <aside className="sidebar">
      {pagination.map((item) => {
        const id = item.path.replace("#", "");

        return (
          <HashLink
            key={item.id}
            to={item.path}
            smooth
            className={`sidebar-item ${activeId === id ? "active" : ""}`}
          >
            0{item.page}
          </HashLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
