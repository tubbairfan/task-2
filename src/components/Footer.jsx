import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {}
        <div className="footer-left">
          <h2 className="footer-logo">
            <i className="fas fa-building"></i> Construction
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do 
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        {}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        {}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>198 West 21th Street, Suite 721 New York, NY 10010</p>
          <p>Phone: +95 (0) 123 456 789</p>
          <p>Cell: +95 (0) 123 456 789</p>
        </div>
        {}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <div className="newsletter-box">
            <input type="email" placeholder="Email Address" />
            <button><Link to="/">SIGN UP</Link></button>
          </div>
        </div>
      </div>
      {}
      <div className="footer-bottom">
        <p>
          Copyright ©2025 All rights reserved | This template is made with 
          <span className="heart">❤️</span> by Colorlib
        </p>
      </div>
    </footer>
  );
};
export default Footer;
