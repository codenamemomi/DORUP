// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Hotel, Zap, ArrowRight, Play, Star, Shield, CheckCircle, Check } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: <Home size={24} />,
      text: 'Verified Home Rentals',
      description: '100% verified properties with legal support',
      color: '#1e40af',
      bgColor: 'rgba(30, 64, 175, 0.2)'
    },
    {
      icon: <Hotel size={24} />,
      text: 'Luxury Hotel Bookings',
      description: 'Nationwide access to standard & luxury hotels',
      color: '#d97706',
      bgColor: 'rgba(217, 119, 6, 0.2)'
    },
    {
      icon: <Zap size={24} />,
      text: 'Unified Bill Payments',
      description: 'All utility bills in one secure platform',
      color: '#059669',
      bgColor: 'rgba(5, 150, 105, 0.2)'
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <motion.div 
            className="shape shape-1"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="shape shape-2"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Text Content */}
          <motion.div 
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge" variants={itemVariants}>
              <Star size={16} />
              <span>Nigeria's All-in-One Lifestyle Platform</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={itemVariants}>
              Redefining
              <span className="gradient-text"> Housing, Hospitality</span>
              & Payments in Nigeria
            </motion.h1>

            {/* Features - Horizontal on desktop, vertical on mobile */}
            <motion.div className="features-grid" variants={itemVariants}>
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div 
                    className="feature-icon"
                    style={{ 
                      backgroundColor: feature.bgColor,
                      color: feature.color 
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h4>{feature.text}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started Free
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="trust-indicators" variants={itemVariants}>
              <div className="trust-item">
                <Shield size={18} />
                <span>100% Secure</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={18} />
                <span>Verified Partners</span>
              </div>
              <div className="trust-item">
                <Star size={18} />
                <span>4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content - Updated with meaningful mockup */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="phone-container">
              <motion.div 
                className="phone-mockup"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="phone-screen">
                  <div className="app-success">
                    <h3 className="success-title">Booking Confirmed!</h3>
                    <p className="success-message">
                      Thank you for choosing Dorup! Your perfect apartment in Lagos is secured.
                    </p>
                    <div className="booking-details">
                      <div className="detail-item">
                        <span className="detail-label">Property:</span>
                        <span className="detail-value">3-Bedroom Apartment, Lekki</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Move-in Date:</span>
                        <span className="detail-value">March 15, 2024</span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Reference No:</span>
                        <span className="detail-value">DOR-7842</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Removed Stats Bar as requested */}
      </div>
    </section>
  );
};

export default HeroSection;