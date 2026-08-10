import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Database, Lightbulb } from 'lucide-react';
import { skillsData } from '../data';
import '../styles/Skills.css';

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

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-secondary">
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={itemVariants}
        >
          <span className="section-eyebrow">02. EXPERTISE</span>
          <h2>Technical Skills.</h2>
          <p>A comprehensive overview of my technical expertise and tools I use.</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
        >
          {/* Languages */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h3 className="category-title">
              <Code className="icon-accent" size={24} />
              Languages
            </h3>
            <div className="skill-badges">
              {skillsData.languages.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h3 className="category-title">
              <Layers className="icon-accent" size={24} />
              Frameworks
            </h3>
            <div className="skill-badges">
              {skillsData.frameworks.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Databases & Tools */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h3 className="category-title">
              <Database className="icon-accent" size={24} />
              Databases & Tools
            </h3>
            <div className="skill-badges">
              {skillsData.databases.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* Core Concepts */}
          <motion.div className="skill-category" variants={itemVariants}>
            <h3 className="category-title">
              <Lightbulb className="icon-accent" size={24} />
              Core Concepts
            </h3>
            <div className="skill-badges">
              {skillsData.coreConcepts.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
