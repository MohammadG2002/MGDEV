import pagination from "./pagination";
import "./Sidebar.css";
import ScrollSpy from "react-scrollspy-navigation";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ScrollSpy activeClass="active">
        {pagination.map((item) => (
          <a key={item.id} href={item.path} className="sidebar-item ">
            0{item.page}
          </a>
        ))}
      </ScrollSpy>
    </div>
  );
};

export default Sidebar;
