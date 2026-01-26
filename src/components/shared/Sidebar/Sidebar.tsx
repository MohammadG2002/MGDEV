import React, { useState } from "react";
import pagination from "./pagination";
import "./Sidebar.css";
import type { PaginationItem } from "../../../types/paginationType";
import { HashLink } from "react-router-hash-link";

interface SidebarProps {
  items?: PaginationItem[];
}

const Sidebar = ({ items }: SidebarProps) => {
  const [currentPage, setCurrentPage] = useState(items ? items[0].page : 1);
  return (
    <div className="sidebar">
      {pagination.map((item) => (
        <HashLink
          key={item.id}
          to={item.path}
          className={`sidebar-item ${
            currentPage === item.page ? "active" : ""
          }`}
          onClick={() => setCurrentPage(item.page)}
        >
          0{item.page - 1}
        </HashLink>
      ))}
    </div>
  );
};

export default Sidebar;
