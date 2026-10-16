import React from "react";
import "./Footer.css";
import logo3 from "../../assets/MoviefyLogo3.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <figure className="footer-logo">
            <img src={logo3} alt="" className="footer-img" />
          </figure>

          <div className="footer-links">
            <Link to="/" className="footer-link">
              Home
            </Link>
            <Link to="/movies" className="footer-link">
              Movies
            </Link>
          </div>
          <div className="footer-copyright">Copyright &copy; 2026 SH</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
