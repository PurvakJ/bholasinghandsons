// pages/AboutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutpage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleShopWheels = () => {
    navigate('/products');
  };

  const handleBookService = () => {
    navigate('/Contact');
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleTireCheckSignup = () => {
    // Navigate to contact page or open a form
    navigate('/contact');
  };

  const handleServiceClick = (service) => {
    navigate('/services');
  };

  const handleBrandClick = (brand) => {
    navigate('/products');
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About Us</h1>
            <nav className="breadcrumb">
              <a href="/" onClick={handleHomeClick}>Home</a>
              <span className="separator"></span>
              <span className="current">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Main Section */}
      <section className="about-main-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-badge">Welcome!</span>
              <h2>Who We Are</h2>
              <div className="about-description">
                <p>
                  Welcome to <strong>Precision Alloy & Tyre</strong> – your trusted destination for premium 
                  alloy wheels, high-quality tyres, and professional automotive care. With over 15 years 
                  of hands-on experience in the tyre and wheel industry, we have built a reputation for 
                  excellence, precision, and unmatched customer service.
                </p>
                <p>
                  We specialize in comprehensive wheel and tyre solutions including <strong>wheel alignment</strong>, 
                  <strong>wheel balancing</strong>, <strong>nitrogen gas filling</strong>, and professional 
                  <strong>tyre fitting</strong>. Our state-of-the-art workshop is equipped with the latest 
                  German and Italian machinery to ensure every service is performed with absolute precision 
                  and care.
                </p>
                <p>
                  Whether you're looking to upgrade to stunning alloy wheels, need a reliable set of tyres 
                  for your daily commute, or require expert alignment and balancing services, our team of 
                  certified technicians is here to deliver exceptional results. We believe in building 
                  lasting relationships with our customers through honesty, transparency, and superior 
                  workmanship.
                </p>
              </div>
            </div>
            <div className="about-image-wrapper">
              <img 
                src="https://reisen.themerex.net/wp-content/uploads/2016/09/bg_about_1.jpg" 
                alt="Precision Alloy & Tyre Workshop" 
                className="about-image"
              />
            </div>
          </div>

          {/* Mission Cards */}
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To deliver precision wheel and tyre services that enhance vehicle performance, safety, and aesthetics, ensuring every customer drives away with confidence and peace of mind.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>To become the most trusted name in alloy wheel and tyre services, recognized for our technical expertise, innovative solutions, and unwavering commitment to customer satisfaction.</p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">❤️</div>
              <h3>Our Values</h3>
              <p>Precision, integrity, safety, and customer-first service drive everything we do. We believe in doing the job right the first time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Continental Banner Section - 100% Guarantee & Tire Check Tuesday */}
      <section className="continental-banner-section">
        <div className="continental-container">
          <div className="continental-banner-grid">
            <div className="continental-banner-card continental-guarantee">
              <div className="continental-banner-content">
                <h2>100% GUARANTEE!</h2>
                <p>We guarantee that the products you have purchased will fit your vehicle.</p>
              </div>
            </div>
            <div 
              className="continental-banner-card continental-tire-check"
              onClick={handleTireCheckSignup}
              style={{ cursor: 'pointer' }}
            >
              <div className="continental-banner-content">
                <h2>TIRE CHECK TUESDAY</h2>
                <p>Sign up for a free "TIRE CHECK TUESDAY" SMS reminder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="services-banner-section">
        <div className="container">
          <div className="banner-grid">
            <div 
              className="banner-card banner-alignment"
              onClick={() => handleServiceClick('alignment')}
              style={{ cursor: 'pointer' }}
            >
              <div className="banner-icon">⚙️</div>
              <h3>Wheel Alignment</h3>
              <p>Precision 3D alignment using state-of-the-art Hunter Hawkeye technology for optimal tyre wear and handling.</p>
            </div>
            <div 
              className="banner-card banner-balancing"
              onClick={() => handleServiceClick('balancing')}
              style={{ cursor: 'pointer' }}
            >
              <div className="banner-icon">⚖️</div>
              <h3>Wheel Balancing</h3>
              <p>High-speed digital balancing ensures smooth rides, reduces vibration, and extends tyre life significantly.</p>
            </div>
            <div 
              className="banner-card banner-nitrogen"
              onClick={() => handleServiceClick('nitrogen')}
              style={{ cursor: 'pointer' }}
            >
              <div className="banner-icon">💨</div>
              <h3>Nitrogen Gas Filling</h3>
              <p>Pure nitrogen inflation maintains optimal tyre pressure longer, improves fuel efficiency, and reduces wear.</p>
            </div>
            <div 
              className="banner-card banner-fitting"
              onClick={() => handleServiceClick('fitting')}
              style={{ cursor: 'pointer' }}
            >
              <div className="banner-icon">🔧</div>
              <h3>Professional Fitting</h3>
              <p>Expert tyre and alloy wheel fitting with precision torque settings and meticulous attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Advantages</span>
            <h2>Why Choose Us</h2>
          </div>
          
          <div className="features-container">
            <div className="features-column features-left">
              <div className="feature-item">
                <div className="feature-icon">🔧</div>
                <div className="feature-content">
                  <h4>State-of-the-Art Equipment</h4>
                  <p>German and Italian precision machinery for flawless alignment, balancing, and fitting services.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-content">
                  <h4>Certified Technicians</h4>
                  <p>Our team is professionally trained and certified to handle all types of vehicles with expertise.</p>
                </div>
              </div>
            </div>

            <div className="features-image">
              <img 
                src="https://reisen.themerex.net/wp-content/uploads/2016/09/about_x2.jpg" 
                alt="Why Choose Precision Alloy & Tyre" 
              />
            </div>

            <div className="features-column features-right">
              <div className="feature-item">
                <div className="feature-icon">🏷️</div>
                <div className="feature-content">
                  <h4>Competitive Pricing</h4>
                  <p>Premium quality services at affordable prices with complete transparency and no hidden charges.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⏱️</div>
                <div className="feature-content">
                  <h4>Quick Turnaround</h4>
                  <p>Efficient service delivery without compromising on quality. Most services completed within 45 minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-grid">
            <div className="cta-card cta-wheels">
              <h2>Premium Alloy Wheels</h2>
              <p>Explore our extensive collection of premium alloy wheels from leading brands. Enhance your vehicle's style and performance today.</p>
              <button className="cta-button" onClick={handleShopWheels}>Shop Wheels</button>
            </div>
            <div className="cta-card cta-services">
              <h2>Book Your Service</h2>
              <p>Schedule your wheel alignment, balancing, or nitrogen filling appointment online. Walk-ins also welcome!</p>
              <button className="cta-button" onClick={handleBookService}>Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header partners-header">
            <span className="section-badge">Trusted Brands</span>
            <h2>Our Partners</h2>
          </div>
          
          <div className="partners-carousel-wrapper">
            <div className="partners-carousel">
              <div className="partners-track">
                {/* Logo Set 1 */}
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Michelin')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_1_x2.png" alt="Michelin" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Bridgestone')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_2_x2.png" alt="Bridgestone" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Continental')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_3_x2.png" alt="Continental" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Pirelli')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_4_x2.png" alt="Pirelli" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Goodyear')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_5_x2.png" alt="Goodyear" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Hankook')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_6_x2.png" alt="Hankook" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Dunlop')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_1_x2.png" alt="Dunlop" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Yokohama')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_2_x2.png" alt="Yokohama" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Falken')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_3_x2.png" alt="Falken" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Toyo Tires')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_4_x2.png" alt="Toyo Tires" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Nexen')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_5_x2.png" alt="Nexen" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Kumho')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_6_x2.png" alt="Kumho" />
                </div>
                {/* Duplicate for seamless loop */}
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Michelin')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_1_x2.png" alt="Michelin" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Bridgestone')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_2_x2.png" alt="Bridgestone" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Continental')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_3_x2.png" alt="Continental" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Pirelli')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_4_x2.png" alt="Pirelli" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Goodyear')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_5_x2.png" alt="Goodyear" />
                </div>
                <div 
                  className="partner-logo"
                  onClick={() => handleBrandClick('Hankook')}
                  style={{ cursor: 'pointer' }}
                >
                  <img src="https://reisen.themerex.net/wp-content/uploads/2016/09/example_logo_6_x2.png" alt="Hankook" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;