// Layout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileSidebar = () => {
    setSidebarShow(!sidebarShow);
  };

  return (
    <div className="layout">
      <Sidebar collapsed={sidebarCollapsed} show={sidebarShow} />
      
      <div className={`content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Topbar 
          toggleSidebar={toggleSidebar} 
          toggleMobileSidebar={toggleMobileSidebar}
        />
        
        <div className="container-fluid p-4 main-content-box">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;