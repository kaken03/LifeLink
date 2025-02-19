import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/appLogo.png';
import './Login.css';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="auth-container">
      <div className="emergency-pulse"></div>
      <div className="auth-content">
        <div className="logo-container">
          <img src={appLogo} alt="LifeLink Logo" className="auth-logo" />
        </div>
        <div className="auth-card">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="email" required placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="password" required placeholder="Password" />
            </div>
            <button type="submit" className="auth-button">Login</button>
          </form>
          <p className="auth-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;