import React, { useState } from 'react';
import '../styles/NavBar.css';
import { Menu, X, Search, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Catalogue', path: '/catalogue' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <BookOpen size={28} className="logo-icon" />
          <span className="logo-text">NextChapter</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <a key={item.name} href={item.path} className="nav-link">
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side: Search + Auth + Mobile toggle */}
        <div className="nav-right">
          {/* Desktop Search */}
          <div className="search-bar desktop-search">
            <div className="search-container">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search for books, authors, or ISBN..."
                className="search-input"
              />
              <button className="search-submit">Search</button>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn-login">Login</button>
            <button className="btn-signup">Sign Up</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="search-bar mobile-search">
        <div className="search-container">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search for books, authors, or ISBN..."
            className="search-input"
          />
          <button className="search-submit">Search</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mobile-auth-buttons">
              <button className="btn-login-mobile">Login</button>
              <button className="btn-signup-mobile">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
