// pages/ContactPage.js
import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaStore,
  FaDirections,
  FaPhone,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt as FaPhoneAlt2,
  FaEnvelope as FaEnvelope2,
  FaClock as FaClock2,
  FaWhatsapp as FaWhatsapp2,
} from "react-icons/fa";
import './ContactPage.css';

const ContactPage = () => {

  // Business information
  const businessInfo = {
    name: 'BHOLA SINGH AND SONS',
    address: 'Near Bus Stand, Mansa, Punjab 151505',
    phone1: '9815985285',
    phone2: '7626985285',
    email: 'ss4540159@gmail.com',
    hours: 'All Days: 9:00 AM - 8:00 PM',
    image: 'https://res.cloudinary.com/dm9gg8yss/image/upload/v1782496998/48b2d909-071c-4c49-a26f-d62c7916beb2_pdoz6k.png',
    // Correct Google Maps Embed URL for Bhola Singh & Sons
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.3222581015357!2d75.3950971!3d29.9989018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111edbed62c98f%3A0x473240cbaeaeb43e!2sBhola%20Singh%20%26%20Sons!5e0!3m2!1sen!2sin!4v1782541281258!5m2!1sen!2sin',
    instagram: 'https://www.instagram.com/bholasingh_sons_tyre/',
    facebook: 'https://www.facebook.com/p/BHOLA-SINGH-SONS-61565127653219/',
    whatsapp: 'https://wa.me/919815985285',
  };

  // Navigation handlers
  const handleGetDirections = () => {
    window.open('https://maps.google.com/maps?daddr=29.9989018,75.3950971', '_blank');
  };

  const handleCallNow = () => {
    window.location.href = `tel:+91${businessInfo.phone1}`;
  };

  const handleVisitStore = () => {
    handleGetDirections();
  };

  const handleWhatsAppChat = () => {
    window.open(businessInfo.whatsapp, '_blank');
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, url: businessInfo.facebook, color: '#1877f2' },
    { name: 'Instagram', icon: FaInstagram, url: businessInfo.instagram, color: '#e4405f' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: businessInfo.whatsapp, color: '#25d366' },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <span className="hero-badge">Get in Touch</span>
            <h1>Contact Us</h1>
            <p>Visit our store or get in touch with our expert team</p>
          </div>
        </div>
      </section>

      {/* Main Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-wrapper">
            <div className="map-container">
              <iframe
                src={businessInfo.mapUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Bhola Singh & Sons - Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location Details */}
      <section className="location-details-section">
        <div className="container">
          <div className="location-details-wrapper">
            <div className="location-card-main">
              <div className="location-image-main">
                <img src={businessInfo.image} alt={businessInfo.name} />
                <div className="location-badge-main">
                  <FaStore />
                </div>
              </div>
              <div className="location-info-main">
                <h2>{businessInfo.name}</h2>
                <div className="location-address-main">
                  <FaMapMarkerAlt />
                  <p>{businessInfo.address}</p>
                </div>
                <div className="location-contact-grid">
                  <div className="contact-item">
                    <FaPhoneAlt />
                    <div>
                      <span className="label">Phone</span>
                      <a href={`tel:+91${businessInfo.phone1}`}>+91 {businessInfo.phone1}</a>
                      <br />
                      <a href={`tel:+91${businessInfo.phone2}`}>+91 {businessInfo.phone2}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaEnvelope />
                    <div>
                      <span className="label">Email</span>
                      <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <FaClock />
                    <div>
                      <span className="label">Opening Hours</span>
                      <p>{businessInfo.hours}</p>
                    </div>
                  </div>
                </div>
                <div className="location-actions-main">
                  <button className="btn-direction" onClick={handleGetDirections}>
                    <FaDirections /> Get Directions
                  </button>
                  <button className="btn-call" onClick={handleCallNow}>
                    <FaPhone /> Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details Cards */}
      <section className="contact-details-section">
        <div className="container">
          <div className="contact-details-grid">
            <div className="detail-card">
              <div className="detail-icon" style={{ background: '#cd9023' }}>
                <FaPhoneAlt2 />
              </div>
              <h3>Call Us</h3>
              <p>Our team is ready to assist you</p>
              <a href={`tel:+91${businessInfo.phone1}`} className="detail-link">+91 {businessInfo.phone1}</a>
              <br />
              <a href={`tel:+91${businessInfo.phone2}`} className="detail-link">+91 {businessInfo.phone2}</a>
            </div>
            <div className="detail-card">
              <div className="detail-icon" style={{ background: '#1a73e8' }}>
                <FaEnvelope2 />
              </div>
              <h3>Email Us</h3>
              <p>We'll respond within 24 hours</p>
              <a href={`mailto:${businessInfo.email}`} className="detail-link">{businessInfo.email}</a>
            </div>
            <div className="detail-card">
              <div className="detail-icon" style={{ background: '#00b894' }}>
                <FaClock2 />
              </div>
              <h3>Working Hours</h3>
              <p>Open all days</p>
              <span className="detail-link">9:00 AM - 8:00 PM</span>
            </div>
            <div className="detail-card" onClick={handleWhatsAppChat} style={{ cursor: 'pointer' }}>
              <div className="detail-icon" style={{ background: '#25d366' }}>
                <FaWhatsapp2 />
              </div>
              <h3>WhatsApp</h3>
              <p>Chat with us instantly</p>
              <a href={businessInfo.whatsapp} className="detail-link" target="_blank" rel="noopener noreferrer">Chat Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Connect</span>
            <h2>Follow Us</h2>
            <p>Stay connected with us on social media for updates and offers</p>
          </div>

          <div className="social-grid">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a 
                  href={social.url} 
                  key={index}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-icon" style={{ background: social.color }}>
                    <Icon />
                  </div>
                  <h4>{social.name}</h4>
                  <span className="social-follow">Follow Us</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2>Need Immediate Assistance?</h2>
            <p>Our expert team is just a call away. We're here to help you with all your tyre and wheel needs</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleCallNow}>
                <FaPhone /> Call Now
              </button>
              <button className="btn-secondary" onClick={handleVisitStore}>
                <FaStore /> Visit Store
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;