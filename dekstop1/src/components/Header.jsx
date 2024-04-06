

import React, { useState } from 'react';
import '../styles/header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">Value My Car</a></li>
        </ul>
      </div>
      <div className="navbar-register">
        <button>Register Now</button>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Header;
