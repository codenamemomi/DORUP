// src/components/EnhancedAboutUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award } from 'lucide-react';
import './EnhancedAboutUs.css';

const EnhancedAboutUs = () => {
  const stats = [
    { icon: <Users size={32} />, number: '50K+', label: 'Happy Users' },
    { icon: <Globe size={32} />, number: '36', label: 'States Covered' },
    { icon: <Award size={32} />, number: '500+', label: 'Hotel Partners' },
    { icon: <Target size={32} />, number: '10K+', label: 'Properties' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="enhanced-about">
      <div className="container">
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Dorup</h1>
          <p className="hero-subtitle">
            We're revolutionizing the way Nigerians live, travel, and manage their daily lives through innovative technology solutions.
          </p>
        </motion.div>

        <motion.div
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="story-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              Founded with a vision to transform everyday living in Nigeria, Dorup emerged from the need to solve the fragmented 
              experiences in housing, hospitality, and utility payments. We saw an opportunity to create a seamless ecosystem 
              that empowers Nigerians with convenience, security, and reliability.
            </p>
            <p>
              Today, we're proud to be at the forefront of digital transformation, bringing innovative solutions that make 
              life easier for thousands of users across the country.
            </p>
          </div>
          <div className="story-visual">
            <div className="floating-cards">
              <div className="card card-1">🏠</div>
              <div className="card card-2">🏨</div>
              <div className="card card-3">💡</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedAboutUs;