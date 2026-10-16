import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import logo3 from "../../assets/MoviefyLogo3.png";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo3} alt="" className="logo" />
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/movies" className="nav-link" onClick={() => setIsMenuOpen(false)}>Browse</Link></li>
        </ul>

        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
