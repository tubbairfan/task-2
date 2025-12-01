import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png.webp";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // Separate states for both dropdowns (IMPORTANT)
  const [blogOpen, setBlogOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const handleLinkClick = () => {
    setMobileOpen(false);
    setBlogOpen(false);
    setPagesOpen(false);
  };
  return (
    <>
    <div className="header-wrapper">
 <div className="topbar">
        <div className="topbar-left">
          <span>+(123) 1234-567-8901</span>
          <span>info@domain.com</span>
          <span>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</span>
        </div>
        <div className="topbar-right">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-google-plus-g"></i>
        </div>
      </div>
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {}
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          ☰
        </div>
        {}
        <ul className={mobileOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </li>
          {}
         <li className="dropdown">
  <div className="dropdown-title">
    <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
    <span
      className="plus-icon"
      onClick={() => setBlogOpen(!blogOpen)}
    >
      {blogOpen ? "−" : "+"}
    </span>
  </div>
  <ul className={blogOpen ? "dropdown-menu show" : "dropdown-menu"}>
    <li>
      <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
    </li>
    <li>
      <Link to="/blog Details" onClick={handleLinkClick}>Blog Details</Link>
    </li>
  </ul>
</li>
          {}
          <li className="dropdown">
  <div className="dropdown-title">
    <Link to="/Element" onClick={handleLinkClick}>Pages</Link>
    <span
      className="plus-icon"
      onClick={() => setPagesOpen(!pagesOpen)}
    >
      {pagesOpen ? "−" : "+"}
    </span>
  </div>
  <ul className={pagesOpen ? "dropdown-menu show" : "dropdown-menu"}>
    <li>
      <Link to="/Element" onClick={handleLinkClick}>Element</Link>
    </li>
    <li>
      <Link to="/project Details" onClick={handleLinkClick}>Project Details</Link>
    </li>
    <li>
      <Link to="/Service Details" onClick={handleLinkClick}>Service Details</Link>
    </li>
  </ul>
</li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
        <Link to="/contact" className="contact-btn" onClick={handleLinkClick}>
          CONTACT NOW
        </Link>
      </nav>
    </div>
    </>
  );
};
export default Navbar;
