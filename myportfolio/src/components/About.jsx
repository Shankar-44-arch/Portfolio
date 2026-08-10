import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Terminal } from 'lucide-react';
import { aboutData } from '../data';
import '../styles/About.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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

const About = () => {
  return (
    <section id="about" className="about-section section-secondary">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={itemVariants}
        >
          <span className="section-eyebrow">01. INTRODUCTION</span>
          <h2>About Me.</h2>
          <p>My background, education, and personal philosophy.</p>
        </motion.div>

        <motion.div 
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {/* Philosophy / Intro Card */}
          <motion.div className="about-card philosophy-card" variants={itemVariants}>
            <div className="about-card-header">
              <Terminal className="icon-accent" size={28} />
              <h3>About Me</h3>
            </div>
            {aboutData.philosophy.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </motion.div>

          {/* Education Timeline */}
          <motion.div className="about-card education-card" variants={itemVariants}>
            <div className="about-card-header">
              <GraduationCap className="icon-accent" size={28} />
              <h3>Education Journey</h3>
            </div>
            
            <div className="timeline">
              {aboutData.education.map((edu, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="timeline-subtitle">{edu.institution} • {edu.period}</p>
                    <p className="timeline-desc">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
