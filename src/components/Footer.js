import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="foot">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Contact US</h3>
          <p>Email: info@ppauto.lk</p>
          <p>Phone: +94 34 568 3056</p>
          <p>Address: No:11, 12 street, Maradana, Colombo</p>
        </div>
        <div className="footer-content">
          <h3>Quick Links</h3>
          <ul className="list">
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="book">Book Now</Link></li>
          </ul>
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-whatsapp"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2023 Prime Pulse Auto. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
