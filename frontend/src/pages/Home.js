import React from 'react';
import { FaWater, FaLeaf, FaRecycle, FaTruck, FaSnowflake, FaMountain, FaSeedling, FaGlobe, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const features = [
  { icon: FaWater, title: "Pure Water", desc: "Premium water from natural and purified sources" },
  { icon: FaLeaf, title: "Eco-Friendly", desc: "Recyclable plastic bottles with reduced environmental impact" },
  { icon: FaRecycle, title: "100% Recyclable", desc: "Bottles made from recyclable materials" },
  { icon: FaTruck, title: "Fast Delivery", desc: "Quick delivery to your home or office" }
];

const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "Fitness Enthusiast", content: "Evo Blue spring water is my go-to choice! The natural taste and mineral content make it perfect for my workouts.", rating: 5 },
  { id: 2, name: "Mike Chen", role: "Office Manager", content: "We stock Evo Blue purified water in our office. The bottles are perfect size and the water quality is consistently excellent!", rating: 5 },
  { id: 3, name: "Emily Davis", role: "Health Coach", content: "I recommend Evo Blue alkaline water to my clients. The pH balance and clean taste are exactly what they need.", rating: 5 }
];

const environmentalFeatures = [
  { icon: FaRecycle, title: "100% Recyclable", description: "All our bottles are made from recyclable materials and can be fully recycled" },
  { icon: FaLeaf, title: "Reduced Carbon Footprint", description: "Our manufacturing process reduces CO2 emissions by 30% compared to traditional methods" },
  { icon: FaGlobe, title: "Sustainable Sourcing", description: "We source water responsibly and protect natural water sources" },
  { icon: FaSeedling, title: "Biodegradable Labels", description: "Our labels are made from biodegradable materials that break down naturally" }
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="water-effect">
          <div className="water-drop"></div>
          <div className="water-drop"></div>
          <div className="water-drop"></div>
          <div className="water-drop"></div>
          <div className="water-drop"></div>
        </div>
        <div className="hero-content">
          <motion.div className="hero-text" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1>Pure Water, Pure Life</h1>
            <p>Discover Evo Blue's premium water-filled plastic bottles. From natural spring water to alkaline water, we offer the purest hydration in eco-friendly packaging.</p>
            <div className="hero-buttons">
              <a href="/products" className="btn-primary">Order Now</a>
              <a href="#water-types" className="btn-secondary">Explore Water Types</a>
            </div>
          </motion.div>
          <motion.div className="hero-image" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=600&h=600&fit=crop" alt="Evo Blue Water Bottles" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>Why Choose Evo Blue?</motion.h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div key={index} className="feature-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <feature.icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Types Section */}
      <section id="water-types" className="water-types">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>Our Water Varieties</motion.h2>
          <div className="water-types-grid">
            {waterTypes.map((waterType, index) => (
              <motion.div key={index} className="water-type-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <waterType.icon className="water-type-icon" />
                <h3>{waterType.title}</h3>
                <p>{waterType.description}</p>
                <ul className="benefits-list">
                  {waterType.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section id="environment" className="environment">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>Our Environmental Commitment</motion.h2>
          <div className="environment-subtitle">Why it matters: Every bottle you buy helps us protect the planet.</div>
          <div className="environment-grid">
            {environmentalFeatures.map((feature, index) => (
              <motion.div key={index} className="environment-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <feature.icon className="environment-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>What Our Customers Say</motion.h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.id} className="testimonial-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => <FaStar key={i} className="star" />)}
                </div>
                <p>"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div className="contact-content" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>Have questions about our water products? We'd love to hear from you. <a href="/contact" className="btn-secondary">Contact Us</a></p>
              <div className="contact-details">
                <div className="contact-item"><strong>Email:</strong> info@evoblue.com</div>
                <div className="contact-item"><strong>Phone:</strong> (555) 123-4567</div>
                <div className="contact-item"><strong>Address:</strong> 123 Water Street, Hydration City, HC 12345</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home; 