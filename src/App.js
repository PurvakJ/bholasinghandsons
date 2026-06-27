// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaCogs,
  FaStore,
  FaEnvelope as FaEnvelopeIcon,
  FaArrowRight,
} from "react-icons/fa";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import './App.css';

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Business information
  const businessInfo = {
    phone1: '9815985285',
    phone2: '7626985285',
    email: 'ss4540159@gmail.com',
    instagram: 'https://www.instagram.com/bholasingh_sons_tyre/',
    facebook: 'https://www.facebook.com/p/BHOLA-SINGH-SONS-61565127653219/',
    whatsapp: 'https://wa.me/919815985285',
    address: 'BHOLA SINGH AND SONS, Near Bus Stand, Mansa',
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  // Navigation items with icons
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About Us', icon: <FaInfoCircle /> },
    { path: '/services', label: 'Services', icon: <FaCogs /> },
    { path: '/products', label: 'Shop', icon: <FaStore /> },
    { path: '/contact', label: 'Contact Us', icon: <FaEnvelopeIcon /> },
  ];

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        
        {/* HEADER */}
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="header-contact">
                <span>
                  <FaPhoneAlt />
                  <div>
                    <strong>Call us Now</strong>
                    <span className="contact-info">
                      <a href={`tel:+91${businessInfo.phone1}`}>
                        +91 {businessInfo.phone1}
                      </a>
                    </span>
                  </div>
                </span>
                <span>
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Visit Us</strong>
                    <span className="contact-info">{businessInfo.address}</span>
                  </div>
                </span>
                <span>
                  <FaClock />
                  <div>
                    <strong>Opening Times</strong>
                    <span className="contact-info">9 AM - 8 PM</span>
                  </div>
                </span>
              </div>
              <div className="header-social">
                <a
                  href={businessInfo.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn facebook"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={businessInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn instagram"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={businessInfo.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn whatsapp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
          <div className="header-main">
            <div className="container">
              <div className="logo">
                <NavLink to="/" onClick={closeMenu}>
                  <img 
                    src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782541523/d797ae20-fca4-4cd2-9c32-044d82b5d0d0-removebg-preview_sudduo.png" 
                    alt="Bhola Singh Sons Tyre" 
                  />
                </NavLink>
              </div>
              
              {/* Hamburger Button */}
              <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <FaBars />
              </button>

              {/* Desktop Navigation */}
              <nav className="nav">
                <ul>
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <NavLink 
                        to={item.path} 
                        end={item.path === '/'}
                        className={({ isActive }) => isActive ? 'active' : ''}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {/* Mobile Drawer */}
        <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        <div className={`mobile-drawer ${isMenuOpen ? 'active' : ''}`}>
          {/* Drawer Header */}
          <div className="drawer-header">
            <div className="drawer-logo">
              <img 
                src="https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/06/logo-2.png" 
                alt="Bhola Singh Sons Tyre" 
              />
            </div>
            <button className="drawer-close" onClick={closeMenu}>
              <FaTimes />
            </button>
          </div>

          {/* Drawer Navigation */}
          <nav className="drawer-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    end={item.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) => isActive ? 'active' : ''}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.label}</span>
                    <span className="nav-arrow"><FaArrowRight /></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Drawer Footer - Contact Info */}
          <div className="drawer-footer">
            <div className="drawer-contact-item">
              <FaPhoneAlt />
              <div>
                <a href={`tel:+91${businessInfo.phone1}`}>+91 {businessInfo.phone1}</a>
                <br />
                <a href={`tel:+91${businessInfo.phone2}`}>+91 {businessInfo.phone2}</a>
              </div>
            </div>
            <div className="drawer-contact-item">
              <FaEnvelope />
              <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
            </div>
            <div className="drawer-contact-item">
              <FaMapMarkerAlt />
              <span>{businessInfo.address}</span>
            </div>
            <div className="drawer-social">
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-btn facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={businessInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-btn instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={businessInfo.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="social-btn whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <img 
                  src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782541523/d797ae20-fca4-4cd2-9c32-044d82b5d0d0-removebg-preview_sudduo.png" 
                  alt="Bhola Singh Sons Tyre" 
                  className="footer-logo"
                />
                <p className="footer-description">
                  Your trusted partner for premium tires, alloy wheels, 
                  and professional automotive services.
                </p>
                <div className="footer-social">
                  <a
                    href={businessInfo.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn facebook"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={businessInfo.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn instagram"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={businessInfo.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn whatsapp"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h3>Get in Touch</h3>
                <ul className="contact-details">
                  <li>
                    <FaPhoneAlt />
                    <div>
                      <span>Phone:</span>
                      <a href={`tel:+91${businessInfo.phone1}`}>+91 {businessInfo.phone1} </a> |
                      <br />
                      <a href={`tel:+91${businessInfo.phone2}`}> +91 {businessInfo.phone2}</a>
                    </div>
                  </li>
                  <li>
                    <FaEnvelope />
                    <div>
                      <span>Email:</span>
                      <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                    </div>
                  </li>
                  <li>
                    <FaMapMarkerAlt />
                    <div>
                      <span>Address:</span>
                      <span>{businessInfo.address}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h3>Newsletter</h3>
                <p className="newsletter-text">Subscribe to get updates on new arrivals and special offers.</p>
                <div className="newsletter">
                  <input type="email" placeholder="Your Email Address" />
                  <button>Subscribe</button>
                </div>
                <p className="newsletter-note">We respect your privacy. Unsubscribe anytime.</p>
              </div>
            </div>
            <div className="footer-bottom">
              <ul className="footer-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
                <li><NavLink to="/products">Shop</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
              </ul>
              <p>© 2026 Bhola Singh Sons Tyre. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;