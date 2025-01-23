import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Ppa.png';

function Navbar() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="navbar">
          <div className="logo-toggle-container">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <span className="toggle-box">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li className="last-link"><Link to="book">Book Now</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
