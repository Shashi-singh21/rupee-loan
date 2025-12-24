import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showAlert("Please enter a valid email address.", "danger");
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      showAlert("Password reset link has been sent to your email address.", "success");
      setEmail("");
    }, 2000);

    // Real API integration:
    /*
    try {
      const response = await fetch('YOUR_API_ENDPOINT/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        showAlert('Password reset link has been sent to your email.', 'success');
        setEmail('');
      } else {
        showAlert(data.message || 'Email not found.', 'danger');
      }
    } catch (error) {
      showAlert('Network error. Please try again.', 'danger');
    } finally {
      setLoading(false);
    }
    */
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <img
          src="/assets/images/logo.jpeg"
          alt="Rupee Loan Logo"
          className="sign-logo"
        />

        <h2>Forgot Password</h2>

        <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: "30px", fontSize: "15px" }}>
          Enter your email address below and we&apos;ll send you a link to reset your password.
        </p>

        {alert.show && (
          <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
            {alert.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setAlert({ show: false, message: "", type: "" })}
              aria-label="Close"
            ></button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-gradient" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          Remember your password? <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;