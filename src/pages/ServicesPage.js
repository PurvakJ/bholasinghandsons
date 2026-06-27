// pages/ServicesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicePage.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleBookService = () => {
    navigate('/contact');
  };

  const handleCallUs = () => {
    // Open phone dialer
    window.location.href = 'tel:+919815985285';
  };

  const handleServiceAreaClick = (serviceName) => {
    // Navigate to contact page with service info
    navigate('/contact', { state: { service: serviceName } });
  };

  const handleEquipmentClick = () => {
    navigate('/products');
  };

  const serviceAreas = [
    { 
      name: 'Tyre Sizes', 
      details: '12" to 22" for passenger vehicles', 
      icon: 'fa-car',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2CkTsezqVZ3h2CGS-lA2f53p7Qh_OzG7K_WPtvwXZmTjWyKD_Ncq7e7d-&s=10'
    },
    { 
      name: 'Alloy Sizes', 
      details: '13" to 22" for all vehicle types', 
      icon: 'fa-cog',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvRiNpWgboq1FfSIlHv62oC2rXiuOVM8OpLMnI4D77u0qNwEB6NmijOd8&s=10'
    },
    { 
      name: 'Wheel Alignment', 
      details: 'Precision 3D alignment technology', 
      icon: 'fa-road',
      image: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/06/img-5.jpg'
    },
    { 
      name: 'Wheel Balancing', 
      details: 'High-speed digital balancing', 
      icon: 'fa-balance-scale',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GHpnjG1LLDE1UPCl1G-hr0_dm5co9jbfuXJUY9A21nX4fh7lb7RT8wE&s=10'
    },
    { 
      name: 'Nitrogen Filling', 
      details: 'Premium nitrogen gas service', 
      icon: 'fa-wind',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaIRPlUECDB5Hrr6XHVdAC1U1J_SV4ojWl7nfR33gWjO9Tslo0BFE0FheS&s=10'
    },
    { 
      name: 'Tyre Fitting', 
      details: 'Professional mounting & fitting', 
      icon: 'fa-wrench',
      image: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/05/img-3.jpg'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <span className="hero-badge">Premium Services</span>
            <h1>Tyre & Wheel Services</h1>
            <p>Comprehensive Tyre and Wheel Services for Every Vehicle</p>
            <div className="hero-stats">
              <span><strong>15+</strong> Years Experience</span>
              <span><strong>50,000+</strong> Services Completed</span>
              <span><strong>98%</strong> Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas - 2 per row */}
      <section className="service-areas-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Coverage</span>
            <h2>Services We Cover</h2>
            <p>We provide comprehensive tyre and wheel solutions for all vehicle types</p>
          </div>
          <div className="service-areas-grid-two">
            {serviceAreas.map((area, index) => (
              <div 
                className="service-area-card-two" 
                key={index}
                onClick={() => handleServiceAreaClick(area.name)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-area-image-two" style={{ backgroundImage: `url(${area.image})` }}>
                </div>
                <h4>{area.name}</h4>
                <p>{area.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">How It Works</span>
            <h2>Our Service Process</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Book Appointment</h4>
                <p>Schedule your service online or call us directly for immediate assistance.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Vehicle Inspection</h4>
                <p>Our experts thoroughly inspect your vehicle and recommend the best solutions.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Professional Service</h4>
                <p>Our certified technicians perform the service using state-of-the-art equipment.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Quality Check</h4>
                <p>We ensure everything is perfect before handing your vehicle back to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="equipment-section">
        <div className="container">
          <div className="equipment-grid">
            <div className="equipment-image">
              <img 
                src="https://reisen.themerex.net/wp-content/uploads/2016/09/about_x2.jpg" 
                alt="State-of-the-art equipment" 
              />
            </div>
            <div className="equipment-content">
              <span className="section-badge">Technology</span>
              <h2>State-of-the-Art Equipment</h2>
              <p>We invest in the latest technology to ensure every service is performed with precision and care.</p>
              <ul className="equipment-list">
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>German and Italian precision machinery</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>3D digital alignment systems</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>High-speed digital balancers</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Professional nitrogen filling stations</span>
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  <span>Premium alloy wheel fitting equipment</span>
                </li>
              </ul>
              <button className="btn-primary" onClick={handleEquipmentClick}>Browse Products</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-content">
            <h2>Ready for Expert Service?</h2>
            <p>Our team of certified technicians is ready to help with all your tyre and wheel needs.</p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleBookService}>Book Service Now</button>
              <button className="btn-secondary" onClick={handleCallUs}>Call Us: +91 9815985285</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;