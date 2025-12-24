import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ collapsed, show }) => {
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  // Get active menu based on current path
  const getActiveMenu = () => {
    const path = location.pathname;
    if (path.startsWith("/users")) return "users";
    if (path.startsWith("/loans")) return "loans";
    if (path === "/dashboard") return "dashboard";
    if (path === "/transactions") return "transactions";
    if (path === "/reports") return "reports";
    if (path === "/settings") return "settings";
    return "dashboard";
  };

  const activeMenu = getActiveMenu();

  const menuItems = [
    {
      id: "dashboard",
      title: "Dashboard",
      icon: "bi-speedometer2",
      link: "/dashboard",
    },
    {
      id: "users",
      title: "Users",
      icon: "bi-people",
      hasSubmenu: true,
      submenu: [
        { title: "All Users", link: "/users" },
        { title: "Active Users", link: "/users/active" },
        { title: "Blocked Users", link: "/users/blocked" },
      ],
    },
    {
      id: "loans",
      title: "Loans",
      icon: "bi-wallet2",
      hasSubmenu: true,
      submenu: [
        { title: "All Loans", link: "/loans" },
        { title: "Pending Loans", link: "/loans/pending" },
        { title: "Approved Loans", link: "/loans/approved" },
        { title: "Rejected Loans", link: "/loans/rejected" },
      ],
    },
    {
      id: "transactions",
      title: "Transactions",
      icon: "bi-arrow-left-right",
      link: "/transactions",
    },
    {
      id: "reports",
      title: "Reports",
      icon: "bi-file-earmark-text",
      link: "/reports",
    },
    {
      id: "settings",
      title: "Settings",
      icon: "bi-gear",
      link: "/settings",
    },
  ];

  const handleMenuClick = (menuId) => {
    if (openSubmenu === menuId) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(menuId);
    }
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""} ${show ? "show" : ""}`}>
      <div className="brand">
        <div className="logo">₹</div>
        {!collapsed && <div className="title">Rupee Loan</div>}
      </div>

      <div className="menu">
        <div className="section-title">Main Menu</div>

        {menuItems.map((item) => (
          <div key={item.id} className="nav-item">
            {item.hasSubmenu ? (
              <button
                className={`nav-link ${activeMenu === item.id ? "active" : ""}`}
                onClick={() => handleMenuClick(item.id)}
              >
                <div className="icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <span className="text">{item.title}</span>
                <i
                  className={`bi bi-chevron-${
                    openSubmenu === item.id ? "up" : "down"
                  } caret`}
                ></i>
              </button>
            ) : (
              <Link
                to={item.link}
                className={`nav-link ${activeMenu === item.id ? "active" : ""}`}
              >
                <div className="icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <span className="text">{item.title}</span>
              </Link>
            )}

            {item.hasSubmenu && (
              <div
                className={`submenu ${
                  openSubmenu === item.id && !collapsed ? "show" : ""
                }`}
                style={{
                  display:
                    openSubmenu === item.id && !collapsed ? "block" : "none",
                }}
              >
                {item.submenu.map((subitem, index) => (
                  <Link
                    key={index}
                    to={subitem.link}
                    className="subitem"
                  >
                    {subitem.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Flyout menu for collapsed sidebar */}
            {collapsed && item.hasSubmenu && (
              <div
                className="flyout"
                style={{
                  display: "none",
                  top: `${60 + menuItems.indexOf(item) * 48}px`,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.display = "block")}
                onMouseLeave={(e) => (e.currentTarget.style.display = "none")}
              >
                <div className="fly-title">{item.title}</div>
                {item.submenu.map((subitem, index) => (
                  <Link key={index} to={subitem.link}>
                    <i className="bi bi-circle-fill" style={{ fontSize: "8px" }}></i>
                    {subitem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;