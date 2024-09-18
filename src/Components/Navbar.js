import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-logo">Yigit<span className="dot">.</span></h1>
      </div>
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#resume" onClick={closeMenu}>Resume</a>
        <a href="#blog" onClick={closeMenu}>Blog</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;
