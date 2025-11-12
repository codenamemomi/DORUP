// src/components/Features.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Hotel, Zap, Shield, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import './Features.css';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Home size={32} />,
      title: '',
      description: 'Access verified and quality home rentals with enhanced security features, insurance policies, and legal support.',
      details: [
        '100% verified properties',
        'Legal & law enforcement support',
        'Property insurance options',
        'Secure payment processing'
      ],
      color: '#1e40af'
    },
    {
      icon: <Hotel size={32} />,
      title: '',
      description: 'Nationwide access to standard and luxurious hotels with integrated GPS navigation and easy bookings.',
      details: [
        'Nationwide hotel network',
        'Integrated GPS navigation',
        'Luxury & standard options',
        'Easy booking process'
      ],
      color: '#d97706'
    },
    {
      icon: <Zap size={32} />,
      title: '',
      description: 'All your utility bill payments in one app - efficient, reliable, and seamless.',
      details: [
        'Single platform for all bills',
        'Instant payment confirmation',
        'Payment history tracking',
        '24/7 customer support'
      ],
      color: '#059669'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Features
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything you need for modern living in one platform
        </motion.p>
        
        <div className="features-container">
          <div className="feature-tabs">
            {features.map((feature, index) => (
              <motion.button
                key={index}
                className={`feature-tab ${activeFeature === index ? 'active' : ''}`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  '--active-color': feature.color
                }}
              >
                <span className="tab-icon">{feature.icon}</span>
                <span className="tab-title">{feature.title}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="feature-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                className="feature-main"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{features[activeFeature].title}</h3>
                <p>{features[activeFeature].description}</p>
                <ul className="feature-details">
                  {features[activeFeature].details.map((detail, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <CheckCircle size={16} />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </AnimatePresence>
            
            <motion.div 
              className="feature-visual"
              key={`visual-${activeFeature}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div 
                className="visual-placeholder"
                style={{ 
                  background: `linear-gradient(135deg, ${features[activeFeature].color}20, ${features[activeFeature].color}40)`,
                  border: `2px solid ${features[activeFeature].color}30`
                }}
              >
                {features[activeFeature].icon}
                <p>Interactive Demo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;