import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { personalInfo } from '../data';
import '../styles/Hero.css';

const Hero = ({ theme }) => {
  const statusData = {
    status: "200 OK",
    role: "Backend Engineer",
    stack: ["Python", "Java", "PostgreSQL", "Docker"],
    open_to: "Summer Internships"
  };

  const [pingStatus, setPingStatus] = useState("PING API");

  const handlePing = () => {
    setPingStatus("STATUS 200 OK!");
    navigator.clipboard.writeText(JSON.stringify(statusData, null, 2));
    setTimeout(() => setPingStatus("PING API"), 2000);
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="hero-section section-primary">
      <div className="container hero-container">
        
        {/* Left Column: Content */}
        <motion.div 
          className="hero-content"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="status-badge" variants={itemVariants}>
            <span className="status-dot"></span>
            Pre-Final Year CS Student | Open to Internship Roles
          </motion.div>
          
          <motion.h2 className="hero-greeting" variants={itemVariants}>Hi, I'm {personalInfo.name || "Your Name"} 👋</motion.h2>
          <motion.h1 className="hero-headline" variants={itemVariants}>Aspiring Backend Engineer</motion.h1>
          
          <motion.p className="hero-subtext" variants={itemVariants}>
            Pre-Final Year Computer Science Student specializing in building scalable RESTful APIs, microservices, and database architecture using Python & Java.
          </motion.p>
          
          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={personalInfo.resumePath || '/resume.pdf'} className="btn btn-outline" download>
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Graphic */}
        <motion.div 
          className="hero-visuals"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-container">
            {personalInfo.profilePicture ? (
              <img 
                src={personalInfo.profilePicture} 
                alt={`${personalInfo.name} Profile`} 
                className="profile-image" 
              />
            ) : (
              <div className="profile-image-placeholder">
                <span className="placeholder-text">SHANKAR.DEV</span>
              </div>
            )}
            
            {/* Terminal Overlay */}
            <div className="terminal-snippet">
              <div className="terminal-header">
                <div className="terminal-header-left">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="terminal-title">curl /api/v1/status</span>
                </div>
                <button className="terminal-ping-btn" onClick={handlePing}>
                  {pingStatus}
                </button>
              </div>
              <div className="terminal-body">
                <pre className="terminal-code">
                  <code>
                    <span className="json-curly">{"{"}</span>{'\n'}
                    {'  '}<span className="json-key">"status"</span><span className="json-colon">:</span> <span className="json-string">"200 OK"</span><span className="json-comma">,</span>{'\n'}
                    {'  '}<span className="json-key">"role"</span><span className="json-colon">:</span> <span className="json-string">"Backend Engineer"</span><span className="json-comma">,</span>{'\n'}
                    {'  '}<span className="json-key">"stack"</span><span className="json-colon">:</span> <span className="json-square">[</span>{'\n'}
                    {'    '}<span className="json-string">"Python"</span><span className="json-comma">,</span>{'\n'}
                    {'    '}<span className="json-string">"Java"</span><span className="json-comma">,</span>{'\n'}
                    {'    '}<span className="json-string">"PostgreSQL"</span><span className="json-comma">,</span>{'\n'}
                    {'    '}<span className="json-string">"Docker"</span>{'\n'}
                    {'  '}<span className="json-square">]</span><span className="json-comma">,</span>{'\n'}
                    {'  '}<span className="json-key">"open_to"</span><span className="json-colon">:</span> <span className="json-string">"Summer Internships"</span>{'\n'}
                    <span className="json-curly">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
