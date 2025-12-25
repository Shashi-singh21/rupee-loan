import { useState, useRef, useEffect } from "react";

const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "Order #1234 has been placed",
      time: "5 minutes ago",
      unread: true,
      icon: "bi-cart-check",
      color: "text-success"
    },
    {
      id: 2,
      title: "User Registration",
      message: "New user signed up",
      time: "1 hour ago",
      unread: true,
      icon: "bi-person-plus",
      color: "text-primary"
    },
    {
      id: 3,
      title: "Payment Received",
      message: "Payment of $299 confirmed",
      time: "2 hours ago",
      unread: true,
      icon: "bi-currency-dollar",
      color: "text-success"
    },
    {
      id: 4,
      title: "System Update",
      message: "System maintenance scheduled",
      time: "1 day ago",
      unread: false,
      icon: "bi-gear",
      color: "text-secondary"
    }
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
        <div className="search-form">
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
        </div>
      </div>

      <div className="ms-auto d-flex align-items-center gap-2 gap-md-3">
        {/* Theme Toggle */}
        <button 
          className="btn btn-link text-dark p-2" 
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          <i className="bi bi-moon fs-5"></i>
        </button>

        {/* Notifications Dropdown */}
        <div className="position-relative" ref={notificationRef}>
          <button 
            className="btn btn-link text-dark position-relative p-2" 
            aria-label="Notifications"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <i className="bi bi-bell fs-5"></i>
            {unreadCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {unreadCount}
                <span className="visually-hidden">unread notifications</span>
              </span>
            )}
          </button>

          {showNotifications && (
            <div 
              className="dropdown-menu dropdown-menu-end show p-0"
              style={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                right: 0,
                width: '350px',
                maxWidth: 'calc(100vw - 20px)',
                maxHeight: '450px',
                overflowY: 'auto',
                border: '1px solid #dee2e6',
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                zIndex: 1050
              }}
            >
              {/* Notification Header */}
              <div className="px-3 py-3 border-bottom bg-light d-flex justify-content-between align-items-center">
                <h6 className="mb-0 fw-bold">Notifications</h6>
                {unreadCount > 0 && (
                  <span className="badge bg-primary rounded-pill">{unreadCount} new</span>
                )}
              </div>

              {/* Notification List */}
              <div>
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`px-3 py-3 border-bottom ${
                      notification.unread ? 'bg-light' : ''
                    }`}
                    style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = notification.unread ? '#f8f9fa' : 'white'}
                  >
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <i className={`bi ${notification.icon} fs-4 ${notification.color}`}></i>
                      </div>
                      <div className="flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="d-flex justify-content-between align-items-start gap-2">
                          <h6 className="mb-1 fw-semibold" style={{ fontSize: '0.9rem' }}>
                            {notification.title}
                          </h6>
                          {notification.unread && (
                            <span 
                              className="badge bg-primary rounded-circle flex-shrink-0" 
                              style={{ width: '8px', height: '8px', padding: 0, marginTop: '4px' }}
                            ></span>
                          )}
                        </div>
                        <p className="mb-1 text-muted text-truncate" style={{ fontSize: '0.85rem' }}>
                          {notification.message}
                        </p>
                        <small className="text-muted">{notification.time}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Footer */}
              <div className="p-2 text-center border-top">
                <button 
                  className="btn btn-link text-decoration-none w-100"
                  onClick={(e) => e.preventDefault()}
                >
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="position-relative" ref={profileRef}>
          <button
            className="btn btn-link text-dark p-1"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            aria-label="User Menu"
          >
            <img
              src="/assets/images/images.png"
              alt="User Avatar"
              className="rounded-circle"
              style={{ 
                width: "36px", 
                height: "36px",
                objectFit: 'cover',
                border: '2px solid #dee2e6'
              }}
            />
          </button>

          {showProfileMenu && (
            <div 
              className="dropdown-menu dropdown-menu-end show"
              style={{
                position: 'absolute',
                top: 'calc(100% + 10px)',
                right: 0,
                minWidth: '220px',
                maxWidth: 'calc(100vw - 20px)',
                border: '1px solid #dee2e6',
                boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                zIndex: 1050
              }}
            >
              {/* User Info */}
              <div className="px-3 py-3 border-bottom">
                <div className="d-flex align-items-center gap-2">
                  <img
                    src="/assets/images/images.png"
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{ 
                      width: "45px", 
                      height: "45px",
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <h6 className="mb-0 fw-semibold text-truncate">John Doe</h6>
                    <small className="text-muted text-truncate d-block">john.doe@example.com</small>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <a 
                  className="dropdown-item d-flex align-items-center gap-2 px-3 py-2" 
                  href="/profile"
                  style={{ transition: 'background-color 0.2s' }}
                >
                  <i className="bi bi-person fs-5"></i>
                  <span>My Profile</span>
                </a>
                <a 
                  className="dropdown-item d-flex align-items-center gap-2 px-3 py-2" 
                  href="/settings"
                  style={{ transition: 'background-color 0.2s' }}
                >
                  <i className="bi bi-gear fs-5"></i>
                  <span>Settings</span>
                </a>
                <a 
                  className="dropdown-item d-flex align-items-center gap-2 px-3 py-2" 
                  href="/help"
                  style={{ transition: 'background-color 0.2s' }}
                >
                  <i className="bi bi-question-circle fs-5"></i>
                  <span>Help Center</span>
                </a>
              </div>

              <hr className="dropdown-divider my-1" />

              {/* Logout */}
              <div className="py-1">
                <button 
                  className="dropdown-item d-flex align-items-center gap-2 px-3 py-2 text-danger w-100 border-0 bg-transparent text-start" 
                  onClick={() => {
                    // Clear any stored user data
                    // localStorage.removeItem('user'); // If you're using localStorage
                    // sessionStorage.clear(); // If you're using sessionStorage
                    
                    // Redirect to sign-in page
                    window.location.href = "/sign-in";
                  }}
                  style={{ transition: 'background-color 0.2s', cursor: 'pointer' }}
                >
                  <i className="bi bi-box-arrow-right fs-5"></i>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;