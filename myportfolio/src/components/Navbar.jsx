import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { socialLinks } from '../data';
import '../styles/Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo">
          <span className="live-dot"></span>
          shankar.dev()
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-links desktop-nav">
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#achievements" className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}>Achievements</a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </nav>

        <div className="navbar-right desktop-nav">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="github-link">
            GitHub
          </a>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className="mobile-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle mobile-theme-toggle" 
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="mobile-nav">
          <a href="#about" onClick={toggleMenu} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
          <a href="#skills" onClick={toggleMenu} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
          <a href="#projects" onClick={toggleMenu} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
          <a href="#achievements" onClick={toggleMenu} className={`nav-link ${activeSection === 'achievements' ? 'active' : ''}`}>Achievements</a>
          <a href="#contact" onClick={toggleMenu} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
