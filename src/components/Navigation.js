import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className="navbar"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/Header.png)`
      }}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Swagarika Giri
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/experience" className={`nav-link ${isActive('/experience')}`} onClick={() => setIsMenuOpen(false)}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`nav-link ${isActive('/projects')}`} onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/cv" className={`nav-link ${isActive('/cv')}`} onClick={() => setIsMenuOpen(false)}>
              CV
            </Link>
          </li>
          <li>
            <Link to="/publications" className={`nav-link ${isActive('/publications')}`} onClick={() => setIsMenuOpen(false)}>
              Publications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

