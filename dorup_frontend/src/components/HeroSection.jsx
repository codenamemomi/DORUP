// src/components/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Hotel, Zap, ArrowRight, Play, Star, Shield, CheckCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: <Home size={28} />,
      text: 'Verified Home Rentals',
      description: '100% verified properties with legal support',
      color: '#1e40af',
      bgColor: 'rgba(30, 64, 175, 0.2)'
    },
    {
      icon: <Hotel size={28} />,
      text: 'Luxury Hotel Bookings',
      description: 'Nationwide access to standard & luxury hotels',
      color: '#d97706',
      bgColor: 'rgba(217, 119, 6, 0.2)'
    },
    {
      icon: <Zap size={28} />,
      text: 'Unified Bill Payments',
      description: 'All utility bills in one secure platform',
      color: '#059669',
      bgColor: 'rgba(5, 150, 105, 0.2)'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users' },
    { number: '500+', label: 'Hotel Partners' },
    { number: '36', label: 'States Covered' },
    { number: '10K+', label: 'Properties' }
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
    hidden: { y: 30, opacity: 0 },
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
      {/* Animated Background Elements */}
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
          <motion.div 
            className="shape shape-3"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              className="hero-badge"
              variants={itemVariants}
            >
              <Star size={16} />
              <span>Nigeria's All-in-One Lifestyle Platform</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 className="hero-title" variants={itemVariants}>
              Redefining
              <span className="gradient-text"> Housing, Hospitality</span>
              <br />
              & Payments in Nigeria
            </motion.h1>

            {/* Subtitle - Improved contrast */}
            <motion.p className="gradient-text" variants={itemVariants}>
              Your seamless solution for verified home rentals, luxury hotel bookings, 
              and effortless utility bill payments. Experience the future of Nigerian living.
            </motion.p>

            {/* Animated Feature Showcase - Improved colors */}
            <motion.div className="feature-showcase" variants={itemVariants}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  className="feature-active"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div 
                    className="feature-icon-active"
                    style={{ 
                      backgroundColor: features[currentFeature].bgColor,
                      color: features[currentFeature].color 
                    }}
                  >
                    {features[currentFeature].icon}
                  </div>
                  <div className="feature-text">
                    <h4 style={{ color: 'white' }}>{features[currentFeature].text}</h4>
                    <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{features[currentFeature].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="feature-indicators">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${currentFeature === index ? 'active' : ''}`}
                    onClick={() => setCurrentFeature(index)}
                  />
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="hero-buttons" variants={itemVariants}>
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play size={18} />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div className="trust-indicators" variants={itemVariants}>
              <div className="trust-item">
                <Shield size={20} />
                <span>100% Secure</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={20} />
                <span>Verified Partners</span>
              </div>
              <div className="trust-item">
                <Star size={20} />
                <span>4.9/5 Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="visual-container">
              {/* Animated Phone Mockup */}
              <motion.div 
                className="phone-mockup"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="phone-screen">
                  <div className="app-interface">
                    <div className="app-header">
                      <div className="app-bar"></div>
                    </div>
                    <div className="app-content">
                      {[1, 2, 3].map((item) => (
                        <motion.div 
                          key={item}
                          className="app-item"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + item * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards - Improved positioning to prevent overlap */}
              <motion.div 
                className="floating-card card-1"
                animate={{ 
                  y: [0, -25, 0],
                  x: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                🏠
              </motion.div>
              
              <motion.div 
                className="floating-card card-2"
                animate={{ 
                  y: [0, -30, 0],
                  x: [0, -15, 0],
                  rotate: [0, 8, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                🏨
              </motion.div>
              
              <motion.div 
                className="floating-card card-3"
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, 12, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                💡
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="stats-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <motion.div 
                className="stat-number"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;