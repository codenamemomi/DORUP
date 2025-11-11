// src/pages/About.jsx
import React from 'react';
import PageTransition from '../components/PageTransition';
import Header from '../components/Header';
import EnhancedAboutUs from '../components/EnhancedAboutUs';
import MissionVision from '../components/MissionVision';
import TeamShowcase from '../components/TeamShowcase';
import Footer from '../components/Footer';

const About = () => {
  return (
    <PageTransition>
      <Header />
      <EnhancedAboutUs />
      <MissionVision />
      <TeamShowcase />
      <Footer />
    </PageTransition>
  );
};

export default About;