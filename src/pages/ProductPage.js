// pages/ProductPage.js
import React, { useState } from 'react';
import './ProductsPage.css';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('tyres');

  // 9 Tyres from different companies
  const tyres = [

    { 
      id: 6,
      name: 'MRF Wanderer AT', 
      price: '$134.00', 
      category: 'All Terrain', 
      size: '235/75R15', 
      brand: 'MRF',
      image: 'https://www.mrftyres.com/images/tyres/patterns/perfinza-left_angle.png',
      description: 'All-terrain tyre for rugged off-road performance'
    },
    { 
      id: 1,
      name: 'Continental PremiumContact 6', 
      price: '$159.00', 
      category: 'Summer', 
      size: '225/45R17', 
      brand: 'Continental',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmV5MU_qqTJ-F-rOHZKHQkjr4nBXkyenZHm4rYnMVggNl7Qi2wn_ynIiw&s=10',
      description: 'Premium summer tyre with excellent grip and handling'
    },
    { 
      id: 3,
      name: 'Michelin CrossClimate 2', 
      price: '$195.00', 
      category: 'All Season', 
      size: '215/60R17', 
      brand: 'Michelin',
      image: 'https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4qgn8kzy63kfzdo/4w-502_3528700124194_tire_michelin_ltx-trail-st_265-slash-65-r17-112t_a_main_1-30_nopad.webp?t=resize&height=700',
      description: 'Versatile all-season tyre for year-round driving'
    },
    { 
      id: 4,
      name: 'Pirelli P Zero Corsa', 
      price: '$245.00', 
      category: 'Sport', 
      size: '245/40R19', 
      brand: 'Pirelli',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDA_VekOdCdpS3aNf5Qv08fxmvzcGeJVJptf5929Uw0O1_ciPjVQEGpOPs&s=10',
      description: 'Ultra-high performance sport tyre for maximum grip'
    },
    { 
      id: 5,
      name: 'Yokohama Geolandar G015', 
      price: '$168.00', 
      category: 'SUV/4x4', 
      size: '265/70R16', 
      brand: 'Yokohama',
      image: 'https://www.tyremarket.com/images/products/Yokohama_Tyre_Geolandar_MT_G003_Car_Tyre.png',
      description: 'Durable SUV tyre for on and off-road adventures'
    },
    { 
      id: 2,
      name: 'Bridgestone Blizzak LM005', 
      price: '$175.00', 
      category: 'Winter', 
      size: '205/55R16', 
      brand: 'Bridgestone',
      image: 'https://5.imimg.com/data5/YF/RJ/OV/SELLER-4447256/bridgestone-tyre.jpg',
      description: 'Superior winter performance on snow and ice'
    },
    { 
      id: 7,
      name: 'Apollo Alnac 4G', 
      price: '$142.00', 
      category: 'Summer', 
      size: '185/60R15', 
      brand: 'Apollo',
      image: 'https://cdn4.singleinterface.com/files/banner_images/73145/8214_1747654240_T00168751.png',
      description: 'Comfortable summer tyre with low rolling resistance'
    },
    { 
      id: 8,
      name: 'JK Tyre Vectra', 
      price: '$156.00', 
      category: 'Summer', 
      size: '195/65R15', 
      brand: 'JK Tyre',
      image: 'https://m.media-amazon.com/images/I/81TjxZOFB0L.jpg',
      description: 'Reliable summer tyre with excellent wet grip'
    },
    { 
      id: 9,
      name: 'CEAT Czar Sport', 
      price: '$128.00', 
      category: 'All Season', 
      size: '205/55R16', 
      brand: 'CEAT',
      image: 'https://www.ceat.com/content/dam/ceat/product-images/4w/secura-drive/sku_60.png',
      description: 'Value all-season tyre with good performance'
    },
    { 
      id: 10,
      name: 'BKT TR 135', 
      price: '$215.00', 
      category: 'Tractor Rear', 
      size: '16.9R30', 
      brand: 'BKT',
      image: 'https://khetigaadi.com/images/tyres/bkt-COMMANDER-TWIN-RIB-front.jpg',
      description: 'Heavy-duty rear tractor tyre designed for excellent traction and durability in field applications.'
    },
    { 
      id: 11,
      name: 'MRF Shatkti Xtra 4', 
      price: '$189.00', 
      category: 'Tractor Rear', 
      size: '14.9R28', 
      brand: 'MRF',
      image: 'https://www.mrftyres.com/images/tyres/patterns/Shatkti-Xtra-4.png',
      description: 'High-performance tractor tyre with an advanced lug pattern for superior grip and self-cleaning properties.'
    },
    { 
      id: 12,
      name: 'CEAT VARDA', 
      price: '$172.00', 
      category: 'Tractor Front', 
      size: '6.00-16', 
      brand: 'CEAT',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/317274957/JI/IF/CQ/97801555/ceat-vardhan-rear-tractor-tyre.jpg',
      description: 'Versatile front tractor tyre offering excellent steering control and flotation for diverse farming needs.'
    }
  ];

  // 12 Alloy Wheels with different designs
  const alloys = [
    { 
      id: 1,
      name: 'OZ Racing Ultraleggera', 
      price: '$299.00', 
      size: '18" x 8"', 
      brand: 'OZ Racing',
      image: 'https://i.pinimg.com/1200x/87/b2/65/87b2658e9bf54ea5d88aee36b83f30a9.jpg',
      design: 'Multi-spoke',
      finish: 'Matte Black'
    },
    { 
      id: 2,
      name: 'BBS CH-R', 
      price: '$349.00', 
      size: '19" x 8.5"', 
      brand: 'BBS',
      image: 'https://i.pinimg.com/736x/ab/23/a6/ab23a64e94d940ff203abfee7f535673.jpg',
      design: 'Twin-spoke',
      finish: 'Silver'
    },
    { 
      id: 3,
      name: 'Enkei RPF1', 
      price: '$279.00', 
      size: '17" x 7.5"', 
      brand: 'Enkei',
      image: 'https://i.pinimg.com/736x/2d/04/41/2d044173fa77f61e2c5bc4e6df55c88a.jpg',
      design: 'Split-spoke',
      finish: 'Gunmetal'
    },
    { 
      id: 4,
      name: 'Work Emotion CR', 
      price: '$389.00', 
      size: '18" x 9"', 
      brand: 'Work',
      image: 'https://i.pinimg.com/1200x/3f/eb/a3/3feba3676b22f6ee36ae4a05cf2d9b23.jpg',
      design: 'Deep-dish',
      finish: 'Bronze'
    },
    { 
      id: 5,
      name: 'RAYS Volk Racing TE37', 
      price: '$459.00', 
      size: '18" x 8.5"', 
      brand: 'RAYS',
      image: 'https://i.pinimg.com/736x/aa/74/66/aa746679c40892aa186b0daaf58f8d38.jpg',
      design: 'Six-spoke',
      finish: 'Gloss Black'
    },
    { 
      id: 6,
      name: 'Vossen CVT', 
      price: '$329.00', 
      size: '20" x 10"', 
      brand: 'Vossen',
      image: 'https://i.pinimg.com/736x/ba/a3/b9/baa3b98c7e5a3ad05061566906456d7f.jpg',
      design: 'Twisted-spoke',
      finish: 'Chrome'
    },
    { 
      id: 7,
      name: 'HRE FF15', 
      price: '$499.00', 
      size: '19" x 9"', 
      brand: 'HRE',
      image: 'https://i.pinimg.com/1200x/04/ac/84/04ac845cc929c8ef110eb64656616040.jpg',
      design: 'Flow-form',
      finish: 'Satin Titanium'
    },
    { 
      id: 8,
      name: 'MOMO Revenge', 
      price: '$259.00', 
      size: '17" x 7"', 
      brand: 'MOMO',
      image: 'https://i.pinimg.com/736x/29/d2/e5/29d2e5dff13f3e91744c180958a611c2.jpg',
      design: 'Y-spoke',
      finish: 'Black Machined'
    },
    { 
      id: 9,
      name: 'Konig Hypergram', 
      price: '$299.00', 
      size: '18" x 8"', 
      brand: 'Konig',
      image: 'https://i.pinimg.com/736x/8a/50/27/8a502725e9049ccd0881204d21d61349.jpg',
      design: 'Concave',
      finish: 'Graphite'
    },
    { 
      id: 10,
      name: 'Fifteen52 Tarmac', 
      price: '$319.00', 
      size: '18" x 8.5"', 
      brand: 'Fifteen52',
      image: 'https://i.pinimg.com/736x/cb/d5/3e/cbd53e21fb3b68c5695a68ef968c0602.jpg',
      design: 'Multi-spoke',
      finish: 'White'
    },
    { 
      id: 11,
      name: 'Sparco Trofeo 5', 
      price: '$279.00', 
      size: '17" x 7.5"', 
      brand: 'Sparco',
      image: 'https://i.pinimg.com/736x/1f/25/c5/1f25c511e7a6c5fdd0fa56c558344ebd.jpg',
      design: 'Five-spoke',
      finish: 'Grey'
    },
    { 
      id: 12,
      name: 'Avanti Racing GX', 
      price: '$239.00', 
      size: '18" x 8"', 
      brand: 'Avanti',
      image: 'https://i.pinimg.com/736x/0f/16/ae/0f16ae55351341848309943ab083c5e2.jpg',
      design: 'Mesh',
      finish: 'Black'
    },
    { 
        id: 13,
        name: 'Avanti Racing GX', 
        price: '$239.00', 
        size: '18" x 8"', 
        brand: 'Avanti',
        image: 'https://i.pinimg.com/1200x/47/87/b2/4787b2178e4e6b64a85ab308d6cd9a4a.jpg',
        design: 'Mesh',
        finish: 'Black'
      },
      { 
        id: 14,
        name: 'Avanti Racing GX', 
        price: '$239.00', 
        size: '18" x 8"', 
        brand: 'Avanti',
        image: 'https://i.pinimg.com/736x/c6/12/c3/c612c369a994e1ba280a45790e9b8a82.jpg',
        design: 'Mesh',
        finish: 'Black'
      },
      { 
        id: 15,
        name: 'Avanti Racing GX', 
        price: '$239.00', 
        size: '18" x 8"', 
        brand: 'Avanti',
        image: 'https://i.pinimg.com/736x/20/98/74/209874063fd18d75d92d0a327a6894d7.jpg',
        design: 'Mesh',
        finish: 'Black'
      }
  ];


  const [tyreFilter] = useState('All');
  const [alloyFilter] = useState('All');

  const filteredTyres = tyreFilter === 'All' 
    ? tyres 
    : tyres.filter(tyre => tyre.category === tyreFilter);

  const filteredAlloys = alloyFilter === 'All' 
    ? alloys 
    : alloys.filter(alloy => alloy.design === alloyFilter);

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <div className="container">
          <div className="product-hero-content">
            <span className="hero-badge">Premium Products</span>
            <h1>Tyres & Alloy Wheels</h1>
            <p>Discover our extensive collection of premium tyres and alloy wheels</p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tab-navigation">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'tyres' ? 'active' : ''}`}
              onClick={() => setActiveTab('tyres')}
            >
              <i className="fas fa-circle"></i>
              Tyres
            </button>
            <button 
              className={`tab-btn ${activeTab === 'alloys' ? 'active' : ''}`}
              onClick={() => setActiveTab('alloys')}
            >
              <i className="fas fa-cog"></i>
              Alloy Wheels
            </button>
          </div>
        </div>
      </section>

      {/* Tyres Section */}
      {activeTab === 'tyres' && (
        <section className="products-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Collection</span>
              <h2>Premium Tyres</h2>
              <p>Choose from our range of high-performance tyres from leading brands</p>
            </div>

            {/* Tyres Grid - 3 columns */}
            <div className="products-grid products-grid-3">
              {filteredTyres.map((tyre) => (
                <div className="product-card" key={tyre.id}>
                  <div className="product-image">
                    <img src={tyre.image} alt={tyre.name} />
                  </div>
                  <div className="product-details">
                    <span className="product-brand">{tyre.brand}</span>
                    <h3>{tyre.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Alloys Section */}
      {activeTab === 'alloys' && (
        <section className="products-section">
          <div className="container">
            <div className="section-header">
              <span className="section-badge">Collection</span>
              <h2>Alloy Wheels</h2>
              <p>Stylish and durable alloy wheels to enhance your vehicle's look and performance</p>
            </div>

            {/* Alloys Grid - 4 columns */}
            <div className="products-grid products-grid-3">
              {filteredAlloys.map((alloy) => (
                <div className="product-card alloy-card" key={alloy.id}>
                  <div className="product-image">
                    <img src={alloy.image} alt={alloy.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brand Partners Section */}
      <section className="brand-partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Trusted Brands</span>
            <h2>Our Brand Partners</h2>
          </div>
          <div className="brand-partners-grid">
            <div className="brand-partner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3o9DyygRxxoItzxSTz0zP84IH6JUK6IxWvTE5aiXv7uAnhbx2ZPFIjT0&s=10" alt="Continental" />
            </div>
            <div className="brand-partner">
              <img src="https://www.continental.com/fileadmin/_processed_/3/b/csm_continental_20logo-1920x1080_f4ea4ca914.png" alt="Michelin" />
            </div>
            <div className="brand-partner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXtsuN4thjQVcOc7CzIemB9l4aVCUyH2xL0z9zhzdsQaIHt-hC6mAwSXPv&s=10" alt="Pirelli" />
            </div>
            <div className="brand-partner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCwufdh6xYkCY7wt8V_rSMBRaekGkXz6P72aQ3M-sf7Q&s=10" alt="Bridgestone" />
            </div>
            <div className="brand-partner">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzvYO_AZ_7zkYuNuFFcEzIDepOqKDlyV9Km2oppy9RXViIZqwcnpTmhk7&s=10" alt="MRF" />
            </div>
            <div className="brand-partner">
              <img src="https://www.logodesignlove.com/wp-content/uploads/2020/01/goodyear-logo-01.jpg" alt="BKT" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="product-cta-section">
        <div className="container">
          <div className="product-cta-content">
            <h2>Need Help Choosing?</h2>
            <p>Our experts are here to help you find the perfect tyres or alloys for your vehicle</p>
            <div className="cta-buttons">
              <button className="btn-primary">Contact Our Experts</button>
              <button className="btn-secondary">Visit Our Showroom</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;