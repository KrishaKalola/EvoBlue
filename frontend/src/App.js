import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWater, 
  FaLeaf, 
  FaRecycle, 
  FaTruck, 
  FaStar, 
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaSnowflake,
  FaMountain,
  FaSeedling,
  FaGlobe,
  FaWhatsapp,
  FaArrowUp
} from 'react-icons/fa';
import './App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Sustainability from './pages/Sustainability';
import FAQ from './pages/FAQ';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/products" element={
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <Products />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <About />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <Contact />
          </motion.div>
        } />
        <Route path="/sustainability" element={
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <Sustainability />
          </motion.div>
        } />
        <Route path="/faq" element={
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}>
            <FAQ />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollBtn = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScrollBtn);
    return () => window.removeEventListener('scroll', handleScrollBtn);
  }, []);

  const waterTypes = [
    {
      icon: FaMountain,
      title: "Spring Water",
      description: "Naturally sourced from pristine mountain springs",
      benefits: ["Natural minerals", "Pure taste", "No artificial additives"]
    },
    {
      icon: FaWater,
      title: "Purified Water",
      description: "Advanced filtration removes impurities",
      benefits: ["Clean taste", "Consistent quality", "Safe for everyone"]
    },
    {
      icon: FaSnowflake,
      title: "Mineral Water",
      description: "Rich in essential minerals and electrolytes",
      benefits: ["Enhanced hydration", "Natural minerals", "Better taste"]
    },
    {
      icon: FaSeedling,
      title: "Alkaline Water",
      description: "Balanced pH for optimal body function",
      benefits: ["pH balanced", "Better absorption", "Reduced acidity"]
    }
  ];

  const environmentalFeatures = [
    {
      icon: FaRecycle,
      title: "100% Recyclable",
      description: "All our bottles are made from recyclable materials and can be fully recycled"
    },
    {
      icon: FaLeaf,
      title: "Reduced Carbon Footprint",
      description: "Our manufacturing process reduces CO2 emissions by 30% compared to traditional methods"
    },
    {
      icon: FaGlobe,
      title: "Sustainable Sourcing",
      description: "We source water responsibly and protect natural water sources"
    },
    {
      icon: FaSeedling,
      title: "Biodegradable Labels",
      description: "Our labels are made from biodegradable materials that break down naturally"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      content: "Evo Blue spring water is my go-to choice! The natural taste and mineral content make it perfect for my workouts.",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      role: "Office Manager",
      content: "We stock Evo Blue purified water in our office. The bottles are perfect size and the water quality is consistently excellent!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "Health Coach",
      content: "I recommend Evo Blue alkaline water to my clients. The pH balance and clean taste are exactly what they need.",
      rating: 5
    }
  ];

  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
          <div className="nav-container">
            <motion.div 
              className="nav-logo"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaWater className="logo-icon" />
              <span>Evo Blue</span>
            </motion.div>
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}> 
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/sustainability" onClick={() => setIsMenuOpen(false)}>Sustainability</Link>
              <Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
            <div className="nav-actions">
              <button className="cart-btn">
                <FaShoppingCart />
                <span className="cart-count">0</span>
              </button>
              <button 
                className="menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </nav>
        {/* Floating WhatsApp Button */}
        <a href="https://wa.me/919999999999" className="floating-whatsapp" target="_blank" rel="noopener noreferrer" title="Chat on WhatsApp">
          <FaWhatsapp />
        </a>
        {/* Scroll to Top Button */}
        {showScroll && (
          <button className="scroll-to-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} title="Scroll to top">
            <FaArrowUp />
          </button>
        )}
        {/* Main Content - Animated page transitions */}
        <AnimatedRoutes />
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Evo Blue</h3>
                <p>Your trusted source for premium water-filled plastic bottles. Pure, refreshing water delivered with convenience and care.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/sustainability">Sustainability</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div className="footer-section">
                <h4>Support</h4>
                <Link to="/faq">FAQ</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/returns">Returns</Link>
                <Link to="/size-guide">Size Guide</Link>
              </div>
              <div className="footer-section">
                <h4>Newsletter</h4>
                <p>Subscribe for updates and exclusive offers</p>
                <div className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button className="btn-primary">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Evo Blue. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
