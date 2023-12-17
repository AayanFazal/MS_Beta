// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/" className="nav-link">Home</a>
      <a href="/upload" className="nav-link">Upload</a>
      <a href="analyze" className="nav-link">Analyze</a>
    </div>
  );
};

export default Navbar;
