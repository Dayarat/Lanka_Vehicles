import React from 'react';
import '../styles/header.css'

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-links">
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
    </nav>
  )
}

export default Header