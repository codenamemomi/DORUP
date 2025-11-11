// src/components/MissionVision.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, MapPin } from 'lucide-react';
import './MissionVision.css';

const MissionVision = () => {
  const items = [
    {
      icon: <Target size={48} />,
      title: 'Our Mission',
      description: 'To simplify and enhance everyday living for Nigerians through integrated technology solutions that bring convenience, security, and reliability to housing, hospitality, and utility management.',
      color: '#1e40af'
    },
    {
      icon: <Eye size={48} />,
      title: 'Our Vision',
      description: 'To become Nigeria\'s leading lifestyle platform, transforming how people live, travel, and manage their daily needs through innovation and exceptional user experiences.',
      color: '#d97706'
    },
    {
      icon: <Heart size={48} />,
      title: 'Our Values',
      description: 'Innovation, Integrity, User-Centricity, Excellence, and Community. These values guide everything we do and every decision we make.',
      color: '#059669'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section className="mission-vision">
      <div className="container">
        <motion.div
          className="mv-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="mv-card"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ '--accent-color': item.color }}
            >
              <div className="mv-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;