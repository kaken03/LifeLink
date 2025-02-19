import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/appLogo.png';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    setPasswordError('');
    // Add signup logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="auth-container">
      <div className="emergency-pulse"></div>
      <div className="auth-content">
        <div className="logo-container">
          <img src={appLogo} alt="LifeLink Logo" className="auth-logo" />
        </div>
        <div className="auth-card">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                required 
                placeholder="Username" 
              />
            </div>
            <div className="input-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="Email" 
              />
            </div>
            <div className="input-group">
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
                placeholder="Phone Number" 
                pattern="[0-9]{11}"
                title="Please enter a valid 11-digit phone number"
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
                placeholder="Password" 
              />
            </div>
            <div className="input-group">
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
                placeholder="Confirm Password" 
              />
              {passwordError && <span className="error-message">{passwordError}</span>}
            </div>
            <button type="submit" className="auth-button">Sign Up</button>
          </form>
          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;