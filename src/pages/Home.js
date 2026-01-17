import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
        <div className="profile-section">
          <h1 className="profile-name">Hi, I'm Swagarika</h1>
          <div className="profile-photo">
            <img 
              src={`${process.env.PUBLIC_URL}/profile-photo.jpg`} 
              alt="Swagarika Giri" 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="photo-placeholder" style={{display: 'none'}}>
              <span>Photo</span>
            </div>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/swagarika-giri" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://github.com/swagarikagiri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://scholar.google.com/citations?user=sWW8fYoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              Google Scholar
            </a>
          </div>
        </div>
        
        <div className="home-content">
          <div className="intro-content">
            <p className="intro-text">
              I am a PhD student in Computer Science at Purdue University, with over seven years of experience in Machine Learning and Deep Learning, specializing in biological and biomedical applications. My research lies at the intersection of AI and computational biology, with a strong focus on protein function prediction and interpretability.
            </p>

            <p className="intro-text">
              My doctoral research explores the use of Large Language Models (LLMs), Protein Language Models (PLMs), Retrieval-Augmented Generation (RAG), and GraphRAG to generate accurate and human-readable functional descriptions of proteins. I am particularly interested in integrating heterogeneous biological data sources and leveraging literature-driven evidence for large-scale biological discovery.
            </p>

            <p className="intro-text">
              Prior to my PhD, I completed my M.Tech in Computer Science from IIT Patna and worked as a Full-Stack Developer at Publicis Groupe, where I contributed to production-grade systems using React, AWS, Spark, and Scala. This blend of research and industry experience allows me to design systems that are both theoretically sound and practically scalable.
            </p>

            <p className="intro-text">
              Outside of research, I enjoy mentoring students, public speaking through Toastmasters, and engaging in meditation and yoga. I value clarity, curiosity, and impact—whether through scientific research, teaching, or building tools that make complex knowledge more accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

