import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../data';
import '../styles/Achievements.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section section-secondary">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={itemVariants}
        >
          <span className="section-eyebrow">04. RECOGNITION</span>
          <h2>Achievements & Certifications.</h2>
          <p>Milestones and professional accomplishments.</p>
        </motion.div>
        
        <motion.div 
          className="achievements-bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {achievementsData.map((item, index) => (
            <motion.div key={index} className="bento-card" variants={itemVariants}>
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-subtitle">{item.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
