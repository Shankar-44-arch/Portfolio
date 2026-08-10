import React from 'react';
import { skillsData } from '../data';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section section-secondary">
      <div className="container">
        <h2>Technical Skills</h2>
        <p>A comprehensive overview of my technical expertise and tools I use.</p>

        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-category">
            <h3 className="category-title">Languages</h3>
            <div className="skill-badges">
              {skillsData.languages.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="skill-category">
            <h3 className="category-title">Frameworks</h3>
            <div className="skill-badges">
              {skillsData.frameworks.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Databases & Tools */}
          <div className="skill-category">
            <h3 className="category-title">Databases & Tools</h3>
            <div className="skill-badges">
              {skillsData.databases.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div className="skill-category">
            <h3 className="category-title">Core Concepts</h3>
            <div className="skill-badges">
              {skillsData.coreConcepts.map((skill, index) => (
                <span key={index} className="badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
