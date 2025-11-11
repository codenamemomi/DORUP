// src/components/ProblemSolution.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Hotel, CreditCard, Shield, MapPin, CheckCircle } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution = () => {
  const problemsAndSolutions = [
    {
      problem: {
        icon: <AlertTriangle size={28} />,
        title: 'Unstructured Home Rentals',
        description: 'Renting and finding homes is risky, strenuous, and unstructured these present days especially in this part of the world.',
        color: '#dc2626'
      },
      solution: {
        icon: <Shield size={28} />,
        title: 'Verified Home Rentals',
        description: 'Verified & quality home rentals, maximised renter\'s convenience as well as enhanced sense of security of renter\'s property and life by giving them access to beneficial insurance policies as well as legal and law enforcement agencies.',
        color: '#1e40af'
      }
    },
    {
      problem: {
        icon: <Hotel size={28} />,
        title: 'Lack of Hotel Standardization',
        description: 'Hotel bookings lack standardization and uniformity in most areas of this part of the world (Nigeria).',
        color: '#d97706'
      },
      solution: {
        icon: <MapPin size={28} />,
        title: 'Standardized Hotel Access',
        description: 'Nationwide access to standard and luxurious hotels as well as easy bookings and navigation to those hotels by integrating a GPS and app hailing feature which would aid the user in getting to their destination.',
        color: '#7c3aed'
      }
    },
    {
      problem: {
        icon: <CreditCard size={28} />,
        title: 'Disjointed Utility Payments',
        description: 'Paying utility bills can be tasking and unreliable with multiple disjointed platforms despite the emergence of various utility bill payment systems.',
        color: '#059669'
      },
      solution: {
        icon: <CheckCircle size={28} />,
        title: 'Unified Bill Payments',
        description: 'Utility bill payments in one app made more efficient.',
        color: '#0891b2'
      }
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
    <section className="problem-solution" id="solutions">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          The Challenge & Our Solution
        </motion.h2>

        <motion.div 
          className="problems-solutions-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problemsAndSolutions.map((item, index) => (
            <motion.div 
              key={index} 
              className="problem-solution-pair"
              variants={itemVariants}
            >
              {/* Problem Card */}
              <div className="problem-card">
                <div className="card-header">
                  <div 
                    className="card-icon problem-icon"
                    style={{ backgroundColor: `${item.problem.color}15` }}
                  >
                    {item.problem.icon}
                  </div>
                  <h3 className="card-title">{item.problem.title}</h3>
                </div>
                <p className="card-description">{item.problem.description}</p>
                <div className="card-badge problem-badge">Problem</div>
              </div>

              {/* Solution Card */}
              <div className="solution-card">
                <div className="card-header">
                  <div 
                    className="card-icon solution-icon"
                    style={{ backgroundColor: `${item.solution.color}15` }}
                  >
                    {item.solution.icon}
                  </div>
                  <h3 className="card-title">{item.solution.title}</h3>
                </div>
                <p className="card-description">{item.solution.description}</p>
                <div className="card-badge solution-badge">Solution</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;