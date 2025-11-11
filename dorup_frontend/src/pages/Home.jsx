// src/pages/Home.jsx
import React from 'react';
import PageTransition from '../components/PageTransition';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSolution from '../components/ProblemSolution';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <PageTransition>
      <Header />
      <HeroSection />
      <ProblemSolution />
      <Features />
      <Footer />
    </PageTransition>
  );
};

export default Home;