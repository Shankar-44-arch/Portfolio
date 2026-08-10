import React from 'react';
import { Award, Trophy } from 'lucide-react';
import { achievementsData } from '../data';
import '../styles/Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section section-secondary">
      <div className="container">
        <h2>Achievements & Certifications</h2>
        <p>A summary of my competitive programming milestones and professional certifications.</p>

        <div className="achievements-grid">
          {/* Certifications */}
          <div className="achievement-card">
            <div className="card-header">
              <Award className="icon-accent" size={28} />
              <h3>Certifications</h3>
            </div>
            <ul className="achievement-list">
              {achievementsData.certifications.map((cert, index) => (
                <li key={index} className="achievement-item">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Competitive Programming */}
          <div className="achievement-card">
            <div className="card-header">
              <Trophy className="icon-accent" size={28} />
              <h3>Competitive Programming</h3>
            </div>
            <ul className="achievement-list">
              {achievementsData.competitive.map((item, index) => (
                <li key={index} className="achievement-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
