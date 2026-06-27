// pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  
  // State for blog dialog
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // State for hero slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Navigation handlers
  const handleFindTire = () => {
    navigate('/products');
  };

  const handleExploreAlloys = () => {
    navigate('/products');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  const handleWatchCommercial = () => {
    // You can replace with actual video link or YouTube URL
    window.open('https://www.youtube.com/watch?v=4IRoVBNupio', '_blank');
  };

  const handleCategoryClick = (category) => {
    navigate('/products', { state: { category: category } });
  };

  const handleSpecClick = (spec) => {
    navigate('/products');
  };

  const handleGalleryClick = (index) => {
    navigate('/products');
  };

  // Brand logos data
  const tireBrands = [
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o9DyygRxxoItzxSTz0zP84IH6JUK6IxWvTE5aiXv7uAnhbx2ZPFIjT0&s=10' },
    { logo: 'https://www.continental.com/fileadmin/_processed_/3/b/csm_continental_20logo-1920x1080_f4ea4ca914.png' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfSG42h2orL4Z0jkdbZozSDWFzM4EA_K2euXxMdc8Axw&s' },
    { logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/6c9667186577615.Y3JvcCwzMzgyLDI2NDYsMTYsMA.jpg' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzvYO_AZ_7zkYuNuFFcEzIDepOqKDlyV9Km2oppy9RXViIZqwcnpTmhk7&s=10' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtsuN4thjQVcOc7CzIemB9l4aVCUyH2xL0z9zhzdsQaIHt-hC6mAwSXPv&s=10' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwufdh6xYkCY7wt8V_rSMBRaekGkXz6P72aQ3M-sf7Q&s=10' },
    { logo: 'https://www.point-s.co.in/sites/default/files/styles/parapraphe_media_picture_mobile/public/medias/picture/2023/11/Pirelli%20Logo%20Tyre_no_payoff_2.webp?itok=zzNeh2Fc' },
    { logo: 'https://content.presspage.com/clients/o_2805.png' },
    { logo: 'https://www.logodesignlove.com/wp-content/uploads/2020/01/goodyear-logo-01.jpg' },
  ];

  const alloyBrands = [
    { logo: 'https://media.licdn.com/dms/image/v2/C511BAQGuUEPelcdwyw/company-background_10000/company-background_10000/0/1583908636398/plati_india_pvt_ltd_cover?e=2147483647&v=beta&t=9mV8x02gSQUZbqFQlins076KXuU1dhYsyg_qAbTTasA' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFVpFPREaxYkzOlrV5gyEK1WboCjJusWaUYEkgsHKhhIVKAX2ZDU1X_62a&s=10' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeYW-xB6T9wNCH9cbvvIYJLzY1N-zL6MwROqbdW2gMOgjQ3n7p4ZVB-pOJ&s=10' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5NZls4hRj3BiCQhxXXxAHvVVUq0dLtkslnG4ZpCQA-SS2JHR6GIREEE&s=10' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7sAkd7g5yHEWUdmgCGxIPwM0vORu8dM4HXnRETNiwL8d1qpHOeBUtv4&s=10' },
    { logo: 'https://i.pinimg.com/736x/7c/e0/5d/7ce05d694d74bd703c657018682cd2e6.jpg' },
    { logo: 'https://i.pinimg.com/736x/dd/4e/94/dd4e947f5f1f0b46cb97b0e6ac23892b.jpg' },
    { logo: 'https://static.vecteezy.com/system/resources/previews/020/927/317/non_2x/toyota-brand-logo-car-symbol-with-name-white-design-japan-automobile-illustration-red-with-background-free-vector.jpg' },
    { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk_yBir63vrClyNAJjnz07TZ7WXCERqgv4IXmyV8-WGA&s=10' },
    { logo: 'https://market-resized.envatousercontent.com/previews/files/65276857/TATA%28590x590%29.jpeg?w=590&h=590&cf_fit=crop&crop=top&format=auto&q=85&s=5d7c5319e92ad15e40248f73705635015c7576da2a6a40f040f274ef2aa9ace4' },
  ];

  // Feature images
  const features = [
    { icon: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/09/icon_1.png', title: 'State of the Art Mounting', desc: 'Professional tire mounting with advanced equipment ensuring perfect fitment and safety.' },
    { icon: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/09/icon_2.png', title: '100% Guaranteed Fitment', desc: 'Every tire and wheel is guaranteed to fit your vehicle perfectly before installation.' },
    { icon: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/09/icon_3.png', title: 'Fast & Hassle-free Shipping', desc: 'Quick delivery to your doorstep with professional packaging and tracking.' },
    { icon: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/09/icon_5.png', title: "We're Tire Experts", desc: 'Years of experience and expertise in tires, wheels, and automotive services.' },
  ];

  // Blog posts with full content for dialog
  const blogPosts = [
    { 
      image: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/09/blog-1.jpg', 
      title: 'How to Choose the Right Tires', 
      date: 'September 19, 2025',
      content: 'Choosing the right tires for your vehicle is crucial for safety, performance, and fuel efficiency. This comprehensive guide will help you understand tire sizes, types, and what to look for when making your purchase. Learn about seasonal tires, tread patterns, and how to read tire sidewall markings to make an informed decision.'
    },
    { 
      image: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/03/blog-2.jpg', 
      title: 'Top 10 Tire Maintenance Tips', 
      date: 'March 24, 2025',
      content: 'Proper tire maintenance extends the life of your tires and ensures your safety on the road. From regular pressure checks to proper rotation schedules, discover the top 10 essential maintenance tips that every vehicle owner should follow. Learn how to spot signs of wear and when it\'s time for replacement.'
    },
    { 
      image: 'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/03/blog-4.jpg', 
      title: 'Understanding Tire Specifications', 
      date: 'March 23, 2025',
      content: 'Tire specifications can be confusing with all the numbers and letters on the sidewall. This guide breaks down everything you need to know about tire sizes, speed ratings, load indexes, and more. Understand what P215/65R15 means and how to choose the right specifications for your driving needs.'
    },
  ];

  // Gallery images
  const galleryImages = [
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2013/06/product-1-350x380.jpg',
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/05/Pirelli-Personalized-Motorcycle-Tires-1-350x380.jpg',
    'https://png.pngtree.com/png-vector/20250220/ourmid/pngtree-two-tires-stacked-vertically-one-on-top-of-the-other-and-png-image_15537213.png',
    'https://png.pngtree.com/png-clipart/20240516/original/pngtree-realistic-car-wheel-tyre-png-image_15110990.png',
    'https://png.pngtree.com/png-clipart/20250517/original/pngtree-car-tire-with-alloy-rim-standing-isolated-on-transparent-background-png-image_21014662.png',
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2013/06/product-5-350x380.jpg',
  ];

  // Hero slide images
  const heroImages = [
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/07/img-1.jpg',
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/05/img-2.jpg',
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/05/img-3.jpg',
    'https://themes.webdevia.com/tires-wheels/wp-content/uploads/2016/06/img-5.jpg'
  ];

  // Category data with click handlers
  const categories = [
    { 
      id: 'winter', 
      className: 'winter', 
      title: 'WINTER TIRES', 
      desc: 'Superior grip on snow and ice',
      category: 'winter'
    },
    { 
      id: 'summer', 
      className: 'summer', 
      title: 'SUMMER TIRES', 
      desc: 'Optimal performance on dry & wet roads',
      category: 'summer'
    },
    { 
      id: 'allseason', 
      className: 'allseason', 
      title: 'ALL SEASONS', 
      desc: 'Versatile year-round driving',
      category: 'allseason'
    },
    { 
      id: 'sport', 
      className: 'sport', 
      title: 'SPORT TIRES', 
      desc: 'Ultimate handling and speed',
      category: 'sport'
    },
  ];

  // Specifications data with click handlers
  const specs = [
    { id: 'tire-sizes', title: 'Tire Sizes', desc: '12" to 22"' },
    { id: 'alloy-sizes', title: 'Alloy Sizes', desc: '13" to 22"' },
    { id: 'tractor-rear', title: 'Tractor Rear', desc: '12-4-28 to 18-44-30' },
    { id: 'tractor-front', title: 'Tractor Front', desc: '6-16 to 12-4-24' },
  ];

  // Handle blog click
  const handleBlogClick = (post) => {
    setSelectedBlog(post);
    setIsDialogOpen(true);
  };

  // Close dialog
  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="homepage">
      {/* HERO SLIDER */}
      <section className="hero-slider">
        <div className="hero-slides-wrapper">
          {heroImages.map((image, index) => (
            <div 
              className={`hero-slide ${currentSlide === index ? 'active' : ''}`} 
              key={index}
            >
              <div 
                className="hero-slide-bg" 
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="slide-content">
          <h2>FIND WHEELS &amp; <span>TYRES</span></h2>
          <h3>FOR ALL VEHICLE TYPES</h3>
          <div className="hero-stats">
            <span><strong>500+</strong> Tire Tests</span>
            <span><strong>12-22"</strong> Tire Sizes</span>
            <span><strong>13-22"</strong> Alloy Sizes</span>
          </div>
          <div className="hero-buttons">
            <button className="btn-hero-primary" onClick={handleFindTire}>Find Your Tire</button>
            <button className="btn-hero-secondary" onClick={handleExploreAlloys}>Explore Alloys</button>
          </div>
        </div>
        <div className="slider-dots">
          {heroImages.map((_, index) => (
            <span 
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories">
        <div className="container">
          <div className="category-grid">
            {categories.map((cat) => (
              <div 
                key={cat.id}
                className={`category-card ${cat.className}`}
                onClick={() => handleCategoryClick(cat.category)}
                style={{ cursor: 'pointer' }}
              >
                <div className="category-overlay">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="specs-section">
        <div className="container">
          <div className="specs-grid">
            {specs.map((spec) => (
              <div 
                key={spec.id}
                className="spec-item"
                onClick={handleSpecClick}
                style={{ cursor: 'pointer' }}
              >
                <i className="fas fa-car"></i>
                <h4>{spec.title}</h4>
                <p>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="https://themes.webdevia.com/tires-wheels/wp-content/uploads/2015/09/pic-1.png" alt="Tire" />
            </div>
            <div className="about-text">
              <h4>We provide a</h4>
              <h2>Over 500 tire tests to ensure you get the perfect tire for your vehicle.</h2>
              <p>Introducing Tires &amp; Wheels online store Real-world, independent tire tests in snow, ice, wet and dry conditions so you'll know exactly how they'll perform on the road. Whatever your budget and whatever the size of car you are looking for, we are sure we can help you find what's right for you.</p>
              <button className="btn-watch" onClick={handleWatchCommercial}>Watch the Commercial</button>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Our Collection</span>
            <h2>Premium Tires & Wheels</h2>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div 
                className="gallery-item" 
                key={index}
                onClick={() => handleGalleryClick(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={img} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <i className="fas fa-search-plus"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIRE BRANDS */}
      <section className="brands-section">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Top Brands</span>
            <h2>Tyre Brands</h2>
          </div>
          <div className="brand-grid brand-grid-tires">
            {tireBrands.map((brand, index) => (
              <div 
                className="brand-card brand-card-image" 
                key={index}
                onClick={handleFindTire}
                style={{ cursor: 'pointer' }}
              >
                <img src={brand.logo} alt={`Tire brand ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div className="feature-item" key={index}>
                <div className="feature-icon-wrapper">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLOY BRANDS */}
      <section className="brands-section alloy-brands">
        <div className="container">
          <div className="section-header">
            <span className="subtitle">Premium Alloys</span>
            <h2>Alloy Brands</h2>
          </div>
          <div className="brand-grid brand-grid-alloys">
            {alloyBrands.map((brand, index) => (
              <div 
                className="brand-card brand-card-image" 
                key={index}
                onClick={handleExploreAlloys}
                style={{ cursor: 'pointer' }}
              >
                <img src={brand.logo} alt={`Alloy brand ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG + VIDEO */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-grid">
            <div className="video-column">
              <div className="section-header">
                <span className="subtitle">The Experts</span>
                <h2>Video Demo</h2>
              </div>
              <div className="video-wrapper">
                <iframe 
                  src="https://player.vimeo.com/video/89520735?title=0&amp;byline=0&amp;portrait=0" 
                  width="100%" 
                  height="350" 
                  allowFullScreen
                  title="Video Demo - Tire Experts"
                ></iframe>
              </div>
            </div>
            <div className="blog-column">
              <div className="section-header">
                <span className="subtitle">The Journal</span>
                <h2>Recent Blog Posts</h2>
              </div>
              <div className="blog-list">
                {blogPosts.map((post, index) => (
                  <div className="blog-item" key={index} onClick={() => handleBlogClick(post)}>
                    <img src={post.image} alt={post.title} />
                    <div className="blog-info">
                      <h4><button className="blog-link">{post.title}</button></h4>
                      <p>{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find the Perfect Tires?</h2>
            <p>Visit our showroom or browse our online collection today!</p>
            <button className="btn-cta" onClick={handleContactUs}>Contact Us Now</button>
          </div>
        </div>
      </section>

      {/* BLOG DIALOG */}
      {isDialogOpen && selectedBlog && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close" onClick={closeDialog}>&times;</button>
            <div className="dialog-image">
              <img src={selectedBlog.image} alt={selectedBlog.title} />
            </div>
            <div className="dialog-body">
              <h2>{selectedBlog.title}</h2>
              <p className="dialog-date">{selectedBlog.date}</p>
              <p className="dialog-description">{selectedBlog.content}</p>
              <button className="dialog-read-more" onClick={closeDialog}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;