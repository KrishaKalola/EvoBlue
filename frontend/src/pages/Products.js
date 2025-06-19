import React from 'react';
import { motion } from 'framer-motion';

function Products() {
  const allProducts = [
    {
      id: 1,
      name: "Regular 20L",
      price: "₹50",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&h=400&fit=crop",
      description: "Pure and refreshing regular water in a 20L can, perfect for home and office use.",
      type: "Regular Water"
    },
    {
      id: 2,
      name: "Mineral+ 1L",
      price: "₹20",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      description: "Mineral enriched water in a convenient 1L bottle for daily hydration.",
      type: "Mineral Water"
    },
    {
      id: 3,
      name: "Alkaline 1L",
      price: "₹35",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
      description: "Alkaline water with balanced pH in a 1L bottle for optimal wellness.",
      type: "Alkaline Water"
    },
    {
      id: 4,
      name: "Sparkle 500ml",
      price: "₹15",
      image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&w=400&h=400&fit=crop",
      description: "Sparkling water in a 500ml bottle, crisp and refreshing on the go.",
      type: "Sparkling Water"
    }
  ];
  const waterTypes = ["All", ...Array.from(new Set(allProducts.map(p => p.type)))]
  const [selectedType, setSelectedType] = React.useState("All");
  const filteredProducts = selectedType === "All" ? allProducts : allProducts.filter(p => p.type === selectedType);
  return (
    <div className="products-page">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Our Products</motion.h2>
        <motion.p className="products-intro" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          Explore our range of pure, refreshing water bottles. Choose your favorite type and enjoy hydration the Evo Blue way!
        </motion.p>
        <motion.div className="products-filter" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          {waterTypes.map(type => (
            <button
              key={type}
              className={`filter-btn${selectedType === type ? ' active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </motion.div>
        <div className="products-grid">
          {filteredProducts.map((product, i) => (
            <motion.div
              className="product-card"
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(30,64,175,0.18)" }}
            >
              {product.bestSeller && (
                <motion.div className="ribbon" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                  Best Seller
                </motion.div>
              )}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-type-badge">{product.type}</div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div className="products-cta" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
          <h3>Ready to hydrate?</h3>
          <a href="/contact" className="btn-secondary">Contact Us for Bulk Orders</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Products; 