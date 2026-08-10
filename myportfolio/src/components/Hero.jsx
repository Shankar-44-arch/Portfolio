import React, { useState } from 'react';
import { Download } from 'lucide-react';
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

  return (
    <section id="about" className="hero-section bg-grid-pattern section-primary">
      <div className="container hero-container">
        
        {/* Left Column: Content */}
        <div className="hero-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            Pre-Final Year CS Student | Open to Internship Roles
          </div>
          
          <h2 className="hero-greeting">Hi, I'm Shankar K G 👋</h2>
          <h1 className="hero-headline">Aspiring Backend Engineer & Software Developer</h1>
          
          <p className="hero-subtext">
            Pre-Final Year Computer Science Student specializing in building scalable RESTful APIs, microservices, and database architecture using Python & Java.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Graphic */}
        <div className="hero-visuals">
          <div className="profile-container">
            <div className="profile-image-placeholder">
              <span className="placeholder-text">SHANKAR.DEV</span>
            </div>
            
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
        </div>

      </div>
    </section>
  );
};

export default Hero;
