import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

const UserDetails = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState("personal");

  const userData = {
    id: "RL25001",
    firstName: "Shubham",
    lastName: "Singh",
    email: "hittheshubham1810@gmail.com",
    phone: "7762042085",
    dateOfBirth: "15/03/1995",
    gender: "Male",
    city: "Mumbai",
    pincode: "400001",
    address: "123, Sample Address, Near XYZ Mall, Mumbai",
    profileImage: "/assets/images/user.png",
    status: "Active",
    joinedAt: "28 Aug 2025",
    balance: "₹ 25,000",
    
    employment: {
      occupation: "Software Engineer",
      company: "Tech Solutions Pvt Ltd",
      monthlyIncome: "₹ 75,000",
      workExperience: "5 Years",
      employmentType: "Salaried"
    },

    documents: [
      { name: "Aadhaar Card", status: "Verified", uploadedOn: "28 Aug 2025" },
      { name: "PAN Card", status: "Verified", uploadedOn: "28 Aug 2025" },
      { name: "Bank Statement", status: "Pending", uploadedOn: "29 Aug 2025" },
      { name: "Salary Slip", status: "Verified", uploadedOn: "28 Aug 2025" }
    ],

    loanHistory: [
      { 
        loanId: "LN001", 
        amount: "₹ 50,000", 
        status: "Approved", 
        appliedOn: "15 Aug 2025",
        tenure: "12 Months"
      },
      { 
        loanId: "LN002", 
        amount: "₹ 75,000", 
        status: "Pending", 
        appliedOn: "28 Aug 2025",
        tenure: "24 Months"
      }
    ],

    pendingEmis: [
      { 
        emiId: "EMI001", 
        loanId: "LN001",
        amount: "₹ 4,500", 
        dueDate: "05 Sep 2025",
        status: "Upcoming"
      },
      { 
        emiId: "EMI002", 
        loanId: "LN001",
        amount: "₹ 4,500", 
        dueDate: "05 Oct 2025",
        status: "Upcoming"
      }
    ],

    transactions: [
      { 
        id: "TXN001", 
        type: "Credit", 
        amount: "₹ 50,000", 
        date: "20 Aug 2025",
        description: "Loan Disbursement"
      },
      { 
        id: "TXN002", 
        type: "Debit", 
        amount: "₹ 4,500", 
        date: "05 Sep 2025",
        description: "EMI Payment"
      }
    ]
  };

  const [formData, setFormData] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phone: userData.phone,
    dateOfBirth: userData.dateOfBirth,
    gender: userData.gender,
    city: userData.city,
    pincode: userData.pincode,
    address: userData.address
  });

  const [statusDropdown, setStatusDropdown] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated User Data:", formData);
    // API call here
  };

  const handleStatusUpdate = (newStatus) => {
    console.log("Update status to:", newStatus);
    setStatusDropdown(false);
    // API call here
  };

  const tabs = [
    { id: "personal", label: "Personal", icon: "bi-person" },
    { id: "employment", label: "Employment Details", icon: "bi-briefcase" },
    { id: "documents", label: "Documents", icon: "bi-file-earmark-text" },
    { id: "loans", label: "Loan History", icon: "bi-wallet2" },
    { id: "emis", label: "Pending EMI's", icon: "bi-calendar-check" },
    { id: "transactions", label: "Transactions", icon: "bi-arrow-left-right" }
  ];

  return (
    <Layout>
      {/* User Header */}
      <div className="card-soft p-4 mb-4">
        <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src="/assets/images/images.png"
              alt={userData.firstName}
              className="rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
            <div>
              <h3 className="mb-1">{userData.firstName} {userData.lastName}</h3>
              <p className="text-muted mb-0">ID: {userData.id}</p>
            </div>
          </div>

          <div className="dropdown">
            <button
              className="btn btn-outline-primary dropdown-toggle"
              onClick={() => setStatusDropdown(!statusDropdown)}
            >
              Update Status
            </button>
            {statusDropdown && (
              <div className="dropdown-menu show">
                <button 
                  className="dropdown-item" 
                  onClick={() => handleStatusUpdate("Active")}
                >
                  Active
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => handleStatusUpdate("Blocked")}
                >
                  Blocked
                </button>
                <button 
                  className="dropdown-item" 
                  onClick={() => handleStatusUpdate("Suspended")}
                >
                  Suspended
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="card-soft p-3 mb-4">
        <div className="d-flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`btn ${activeTab === tab.id ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <i className={`bi ${tab.icon} me-2`}></i>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card-soft p-4">
        {activeTab === "personal" && (
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Date Of Birth</label>
                <input
                  type="text"
                  name="dateOfBirth"
                  className="form-control"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender</label>
                <input
                  type="text"
                  name="gender"
                  className="form-control"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Pincode</label>
                <input
                  type="text"
                  name="pincode"
                  className="form-control"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  rows="3"
                  value={formData.address}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}

        {activeTab === "employment" && (
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Occupation</label>
              <p className="form-control-plaintext">{userData.employment.occupation}</p>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Company</label>
              <p className="form-control-plaintext">{userData.employment.company}</p>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Monthly Income</label>
              <p className="form-control-plaintext">{userData.employment.monthlyIncome}</p>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Work Experience</label>
              <p className="form-control-plaintext">{userData.employment.workExperience}</p>
            </div>
            <div className="col-md-6">
              <label className="form-label fw-semibold">Employment Type</label>
              <p className="form-control-plaintext">{userData.employment.employmentType}</p>
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Document Name</th>
                  <th>Status</th>
                  <th>Uploaded On</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.documents.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.name}</td>
                    <td>
                      <span className={`badge ${doc.status === "Verified" ? "bg-success" : "bg-warning"}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td>{doc.uploadedOn}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="bi bi-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Loan History Tab */}
        {activeTab === "loans" && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Loan ID</th>
                  <th>Amount</th>
                  <th>Tenure</th>
                  <th>Applied On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {userData.loanHistory.map((loan, index) => (
                  <tr key={index}>
                    <td>{loan.loanId}</td>
                    <td>{loan.amount}</td>
                    <td>{loan.tenure}</td>
                    <td>{loan.appliedOn}</td>
                    <td>
                      <span className={`badge ${loan.status === "Approved" ? "bg-success" : "bg-warning"}`}>
                        {loan.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary">
                        <i className="bi bi-eye"></i> View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pending EMIs Tab */}
        {activeTab === "emis" && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>EMI ID</th>
                  <th>Loan ID</th>
                  <th>Amount</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {userData.pendingEmis.map((emi, index) => (
                  <tr key={index}>
                    <td>{emi.emiId}</td>
                    <td>{emi.loanId}</td>
                    <td>{emi.amount}</td>
                    <td>{emi.dueDate}</td>
                    <td>
                      <span className="badge bg-info">{emi.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {userData.transactions.map((txn, index) => (
                  <tr key={index}>
                    <td>{txn.id}</td>
                    <td>
                      <span className={`badge ${txn.type === "Credit" ? "bg-success" : "bg-danger"}`}>
                        {txn.type}
                      </span>
                    </td>
                    <td>{txn.amount}</td>
                    <td>{txn.date}</td>
                    <td>{txn.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserDetails;