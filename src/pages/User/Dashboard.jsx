// Dashboard.jsx
import { useState } from "react";
import Layout from "../../components/Layout";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userSearch, setUserSearch] = useState("");

  const stats = [
    {
      icon: "bi-file-text",
      title: "APPLICATIONS",
      value: "1,245",
      change: "+5.2% from last month",
      changePositive: true,
    },
    {
      icon: "bi-check-circle",
      title: "APPROVED LOANS",
      value: "872",
      change: "+3.8% from last month",
      changePositive: true,
    },
    {
      icon: "bi-currency-rupee",
      title: "DISBURSED",
      value: "₹2.35 Cr",
      change: "+6.1% from last month",
      changePositive: true,
    },
    {
      icon: "bi-people",
      title: "ACTIVE CUSTOMERS",
      value: "1,032",
      change: "+4.5% from last month",
      changePositive: true,
    },
  ];

  const users = [
    {
      id: "RL25001",
      name: "Shubham Singh",
      email: "hittheshubham1810@gmail.com",
      phone: "+91 7762042085",
      joinedAt: "28 Aug 2025",
      balance: "₹ 0",
      status: "Registered",
    },
    {
      id: "2",
      name: "Prince Jha",
      email: "erprincejhaa@gmail.com",
      phone: "+91 9991896640",
      joinedAt: "27 Aug 2025",
      balance: "₹ 0",
      status: "Registered",
    },
  ];

  return (
    <Layout>
      <div className="row g-3 mb-4">
        {stats.map((stat, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card-soft p-3">
              <div className="d-flex align-items-center justify-content-between">
                <div className="icon">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <div className="card-soft-content">
                  <div className="text-muted small mb-1">{stat.title}</div>
                  <div className="value">{stat.value}</div>
                  <div
                    className={`delta ${
                      stat.changePositive ? "text-success" : "text-danger"
                    }`}
                  >
                    {stat.change}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* All Users Section */}
      <div className="card-soft p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h4 className="mb-0">All Users</h4>
          <div className="user-search">
            <div className="search-form">
              <i className="bi bi-search input-icon"></i>
              <input
                type="text"
                className="form-control search-input"
                placeholder="Name, Email, Phone Number..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="table-responsive">
          <table className="table user-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email / Mobile</th>
                <th>Joined At</th>
                <th>Balance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src="/assets/images/user.png"
                        alt={user.name}
                        className="rounded-circle"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div>
                        <div className="fw-semibold">{user.name}</div>
                        <small className="text-muted">ID: {user.id}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>{user.email}</div>
                    <small className="text-muted">{user.phone}</small>
                  </td>
                  <td>{user.joinedAt}</td>
                  <td>{user.balance}</td>
                  <td>
                    <span className="badge bg-warning text-dark">
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => console.log(`View user ${user.id}`)}
                    >
                      <i className="bi bi-eye"></i> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <nav>
          <ul className="custom-pagination">
            <li className="page-item">
              <button
                className="page-link prev"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                ←
              </button>
            </li>
            <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(1)}>
                1
              </button>
            </li>
            <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(2)}>
                2
              </button>
            </li>
            <li className={`page-item ${currentPage === 3 ? "active" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(3)}>
                3
              </button>
            </li>
            <li className="page-item">
              <button
                className="page-link next"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                →
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Dashboard;