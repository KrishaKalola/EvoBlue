
import React from 'react';
import { FaRecycle, FaLeaf, FaGlobe, FaSeedling } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Sustainability() {
  return (
    <motion.div className="page-container sustainability-page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.28 }}>
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>Sustainability at Evo Blue</motion.h2>
      <motion.section className="sustain-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Our Environmental Commitment</h3>
        <p>At Evo Blue, we believe in protecting the planet while delivering the purest water. Our bottles are made from 100% recyclable materials, and our processes are designed to minimize our carbon footprint.</p>
      </motion.section>
      <motion.section className="sustain-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Bottle Lifecycle</h3>
        <motion.ul className="sustain-list" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.07}}}}>
          {[{
            icon: <FaLeaf />,
            text: <><strong>Sourcing:</strong> Water is responsibly sourced from protected springs and aquifers.</>
          }, {
            icon: <FaRecycle />,
            text: <><strong>Production:</strong> Bottles are made from recycled and recyclable plastics.</>
          }, {
            icon: <FaGlobe />,
            text: <><strong>Distribution:</strong> Efficient logistics reduce emissions and waste.</>
          }, {
            icon: <FaSeedling />,
            text: <><strong>Recycling:</strong> Used bottles are collected and reprocessed for a circular lifecycle.</>
          }].map((item, i) => (
            <motion.li key={i} variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}} whileHover={{ scale: 1.08, color: '#1e40af' }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
              <span style={{marginRight: '0.7rem'}}>{item.icon}</span> {item.text}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
      <motion.section className="sustain-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Green Initiatives</h3>
        <p>We support local clean water projects, sponsor environmental education, and use biodegradable labels. Every purchase helps us invest in a greener future.</p>
      </motion.section>
    </motion.div>
  );
}

export default Sustainability; 