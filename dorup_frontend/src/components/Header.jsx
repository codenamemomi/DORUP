// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, LogIn, UserPlus, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <h2>Dorup</h2>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={closeMenu}
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

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-overlay" onClick={closeMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;