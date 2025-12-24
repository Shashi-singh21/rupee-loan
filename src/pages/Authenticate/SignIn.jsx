import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call aayega
localStorage.setItem("token", "login");
    navigate("/dashboard");
    };

  return (
    <div className="signin-container">
      <div className="signin-card">

        <img
          src="/assets/images/logo.jpeg"
          alt="Rupee Loan Logo"
          className="sign-logo"
        />

        <h2>Sign In</h2>

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
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="text-end mb-3 forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn btn-gradient">
            Sign In
          </button>
        </form>

        <div className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <Link to="/sign-up">Sign Up</Link>
        </div>

      </div>
    </div>
  );
};

export default SignIn;