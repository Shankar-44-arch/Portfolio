import React, { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
import { projectsData } from '../data';
import '../styles/Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  React.useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, projectsData.length - visibleCards);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="projects" className="projects-section section-primary bg-grid-pattern">
      <div className="container">
        <div className="projects-header">
          <div>
            <h2>Featured Projects</h2>
            <p>A selection of backend systems and APIs I have built.</p>
          </div>
          <div className="slider-controls">
            <button 
              className="control-btn" 
              onClick={prevSlide} 
              aria-label="Previous project"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="control-btn" 
              onClick={nextSlide} 
              aria-label="Next project"
              disabled={currentIndex === maxIndex}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="projects-slider-container">
          <div 
            className="projects-track" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` 
            }}
          >
          {projectsData.map((project) => (
            <div key={project.id} className="project-card-wrapper" style={{ flex: `0 0 ${100 / visibleCards}%` }}>
              <article className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code on GitHub`}>
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live demo`}>
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="project-desc">{project.description}</p>
              
              <div className="architecture-box">
                <h4 className="architecture-title">Architecture & Highlights:</h4>
                <ul className="architecture-list">
                  {project.architecture.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </article>
            </div>
          ))}
          </div>
        </div>
        
        <div className="slider-indicators">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button 
              key={index}
              className={`indicator-dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
