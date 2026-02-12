import { type ReactNode } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-container">
        <main className="main-content">{children}</main>
        <Sidebar />
      </div>
    </div>
  );
};

export default Layout;
