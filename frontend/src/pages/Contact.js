import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div className="page-container contact-page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.28 }}>
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>Contact Us</motion.h2>
      <motion.div className="contact-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <div className="contact-info">
          <h3>Company Info</h3>
          <p><FaEnvelope /> info@evoblue.com</p>
          <p><FaPhone /> (555) 123-4567</p>
          <p><FaMapMarkerAlt /> 123 Water Street, Hydration City, HC 12345</p>
          <div className="social-links">
            <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, background: '#2563eb' }} transition={{ duration: 0.18 }}><FaInstagram /></motion.a>
            <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, background: '#2563eb' }} transition={{ duration: 0.18 }}><FaFacebook /></motion.a>
            <motion.a href="https://twitter.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.15, background: '#2563eb' }} transition={{ duration: 0.18 }}><FaTwitter /></motion.a>
          </div>
        </div>
        <motion.form className="contact-form" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
          <h3>Send Us a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <motion.button type="submit" className="btn-primary" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.07 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>Send Message</motion.button>
        </motion.form>
      </motion.div>
      <motion.div className="contact-map" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Find Us</h3>
        <img src="https://maps.googleapis.com/maps/api/staticmap?center=Hydration+City,HC+12345&zoom=13&size=600x200&maptype=roadmap&markers=color:blue%7Clabel:E%7C123+Water+Street,Hydration+City" alt="Evo Blue Location Map" style={{width:'100%', borderRadius:'12px', marginTop:'1rem'}} />
      </motion.div>
    </motion.div>
  );
}

export default Contact; 