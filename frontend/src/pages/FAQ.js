import React from 'react';
import { motion } from 'framer-motion';

function FAQ() {
  const faqs = [
    {
      q: "What types of water does Evo Blue offer?",
      a: "We offer Spring Water, Purified Water, Mineral Water, and Alkaline Water in various bottle sizes."
    },
    {
      q: "Are Evo Blue bottles recyclable?",
      a: "Yes! All our bottles are made from 100% recyclable materials and our labels are biodegradable."
    },
    {
      q: "Where is Evo Blue water sourced from?",
      a: "Our water is responsibly sourced from protected springs and aquifers, ensuring purity and sustainability."
    },
    {
      q: "How can I place a bulk order?",
      a: <>You can contact us directly through our <a href='/contact'>Contact page</a> for bulk and corporate orders.</>
    },
    {
      q: "Do you deliver to my area?",
      a: "We deliver across most regions. Enter your address at checkout or contact us to confirm delivery availability."
    },
    {
      q: "How do I recycle my bottles?",
      a: "Simply rinse and place them in your local recycling bin. Check with your municipality for specific guidelines."
    }
  ];
  return (
    <motion.div className="page-container faq-page" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.28 }}>
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28 }}>Frequently Asked Questions</motion.h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <motion.div className="faq-item" key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, delay: i * 0.07 }} whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(30,64,175,0.18)" }}>
            <h4>{faq.q}</h4>
            <p>{faq.a}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default FAQ; 