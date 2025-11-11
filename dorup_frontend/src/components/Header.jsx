// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, LogIn, UserPlus } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h2>Dorup</h2>
          </Link>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
          >
            <Users size={18} />
            <span>About Us</span>
          </Link>
          <div className="auth-links">
            <button className="btn btn-outline">
              <LogIn size={18} />
              <span>Login</span>
            </button>
            <button className="btn btn-primary">
              <UserPlus size={18} />
              <span>Sign Up</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;