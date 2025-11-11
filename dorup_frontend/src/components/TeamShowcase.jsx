// src/components/TeamShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, MapPin, Users } from 'lucide-react';
import './TeamShowcase.css';

const TeamShowcase = () => {
  const teamMembers = [
    {
      name: 'Chinedum Ikealozie',
      role: 'Chairman/Founder',
      description: 'Visionary leader with extensive experience in business strategy and entrepreneurship.',
      initials: 'CI',
      color: '#1e40af'
    },
    {
      name: 'Alex Alozie',
      role: 'Chief Executive Officer',
      description: 'Driving business growth and strategic direction with a focus on innovation and customer satisfaction.',
      initials: 'AA',
      color: '#d97706'
    },
    {
      name: 'Anthony Alozie',
      role: 'Deputy CEO',
      description: 'Overseeing daily operations and ensuring seamless execution of company strategies.',
      initials: 'AA',
      color: '#059669'
    },
    {
      name: 'Sholaye Grage',
      role: 'Finance Director',
      description: 'Managing financial strategy and ensuring sustainable growth through sound fiscal management.',
      initials: 'SG',
      color: '#7c3aed'
    },
    {
      name: 'David',
      role: 'Operations Director',
      description: 'Optimizing operational processes and ensuring efficient service delivery across all platforms.',
      initials: 'DA',
      color: '#dc2626'
    },
    {
      name: 'Omomijolaoluwa Akinrongude',
      role: 'Chief Technology Officer',
      description: 'Leading technological innovation and driving the development of cutting-edge solutions.',
      initials: 'OA',
      color: '#0891b2'
    }
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

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="team-showcase" id="team">
      <div className="container">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Meet Our Leadership Team</h2>
          <p className="team-subtitle">
            A diverse team of passionate professionals dedicated to transforming the Nigerian lifestyle experience
          </p>
        </motion.div>

        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <div 
                className="member-avatar"
                style={{ 
                  background: `linear-gradient(135deg, ${member.color}20, ${member.color}40)`,
                  border: `3px solid ${member.color}30`
                }}
              >
                <span 
                  className="avatar-initials"
                  style={{ color: member.color }}
                >
                  {member.initials}
                </span>
                <div 
                  className="avatar-glow"
                  style={{ backgroundColor: member.color }}
                />
              </div>
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>

              <div className="member-social">
                <motion.button 
                  className="social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={18} />
                </motion.button>
                <motion.button 
                  className="social-btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={18} />
                </motion.button>
              </div>

              <div 
                className="card-accent"
                style={{ backgroundColor: member.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="team-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stat-item">
            <Users size={32} className="stat-icon" />
            <div className="stat-content">
              <h4>6+</h4>
              <p>Industry Experts</p>
            </div>
          </div>
          <div className="stat-item">
            <MapPin size={32} className="stat-icon" />
            <div className="stat-content">
              <h4>36</h4>
              <p>States Coverage</p>
            </div>
          </div>
          <div className="stat-item">
            <Award size={32} className="stat-icon" />
            <div className="stat-content">
              <h4>50K+</h4>
              <p>Users Served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamShowcase;