import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div className="page-container about-page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.28 }}>
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>About Evo Blue</motion.h2>
      <motion.p className="about-intro" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        Evo Blue was founded with a simple mission: to deliver the purest, most refreshing water in eco-friendly packaging, while making a positive impact on our planet.
      </motion.p>
      <motion.section className="about-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Our Story</h3>
        <p>Born from a passion for health and sustainability, Evo Blue started as a small family business. Today, we serve thousands of customers who care about quality hydration and the environment. Our journey is driven by innovation, responsibility, and a love for pure water.</p>
      </motion.section>
      <motion.section className="about-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Our Mission</h3>
        <p>To provide premium water products that are as good for you as they are for the planet. We believe everyone deserves access to clean, safe, and delicious water—delivered with care and a commitment to sustainability.</p>
      </motion.section>
      <motion.section className="about-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Our Values</h3>
        <ul className="about-values">
          <li><strong>Purity:</strong> Only the best water, from trusted sources.</li>
          <li><strong>Eco-Consciousness:</strong> 100% recyclable bottles and green practices.</li>
          <li><strong>Customer Care:</strong> We put people first, always.</li>
          <li><strong>Innovation:</strong> Constantly improving for you and the planet.</li>
        </ul>
      </motion.section>
      <motion.section className="about-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>
        <h3>Meet Our Team</h3>
        <motion.div className="team-grid" initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.09}}}}>
          {[{
            img: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "John Doe",
            role: "Founder & CEO"
          }, {
            img: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Jane Smith",
            role: "Head of Sustainability"
          }, {
            img: "https://randomuser.me/api/portraits/men/54.jpg",
            name: "Mike Brown",
            role: "Operations Manager"
          }].map((member, i) => (
            <motion.div className="team-member" key={i} variants={{hidden: {opacity: 0, y: 30}, visible: {opacity: 1, y: 0}}} whileHover={{ scale: 1.08, boxShadow: "0 8px 32px rgba(30,64,175,0.18)" }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </motion.div>
  );
}

export default About; 