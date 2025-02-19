import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import appLogo from './assets/appLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <div className="welcome-screen">
            <div className="emergency-pulse"></div>
            <div className="content">
              <div className="logo-container">
                <img src={appLogo} alt="LifeLink Logo" className="app-logo" />
              </div>
              <Link to="/login" className="get-started-btn">
                Get Started
              </Link>
            </div>
          </div>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;