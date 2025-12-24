import { useState } from "react";

const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="topbar">
      <button 
        className="btn btn-link text-dark d-none d-lg-block"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <i className="bi bi-list fs-4"></i>
      </button>

      <button 
        className="btn btn-link text-dark d-lg-none"
        onClick={toggleMobileSidebar}
        aria-label="Toggle Mobile Sidebar"
      >
        <i className="bi bi-list fs-4"></i>
      </button>

      <div className="search">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="topbar-search" className="visually-hidden">
            Search Dashboard
          </label>
          <i className="bi bi-search input-icon"></i>
          <input
            type="search"
            id="topbar-search"
            name="search"
            className="form-control search-input"
            placeholder="Search Dashboard, Users, Orders"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
        </form>
      </div>

      <div className="ms-auto d-flex align-items-center gap-3">
        <button 
          className="btn btn-link text-dark" 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <i className="bi bi-moon fs-5"></i>
        </button>

        <div className="position-relative">
          <button className="btn btn-link text-dark" aria-label="Notifications">
            <i className="bi bi-bell fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              3
              <span className="visually-hidden">unread notifications</span>
            </span>
          </button>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-link text-dark dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-label="User Menu"
            aria-expanded="false"
          >
            <img
              src="/assets/images/images.png"
              alt="User Avatar"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="/profile">
                <i className="bi bi-person me-2"></i>
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/settings">
                <i className="bi bi-gear me-2"></i>
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="/logout">
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topbar;