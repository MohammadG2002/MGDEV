import { type ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
  isProject?: boolean;
}

const Layout = ({ children, isProject }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-container">
        <main className="main-content">{children}</main>
        <Sidebar isProject={isProject} />
      </div>
    </div>
  );
};

export default Layout;
