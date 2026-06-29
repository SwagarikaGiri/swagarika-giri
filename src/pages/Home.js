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
              I am a Ph.D. candidate in Computer Science at Purdue University with over seven years of experience in machine learning, deep learning, and natural language processing, specializing in computational biology and biomedical AI. My research focuses on developing interpretable and scalable AI systems for protein function prediction by combining Large Language Models (LLMs), Protein Language Models (PLMs), Retrieval-Augmented Generation (RAG), GraphRAG, and agentic AI.
            </p>

            <p className="intro-text">
              My work explores how multimodal biological data and scientific literature can be integrated to generate accurate, evidence-driven, and human-readable protein function annotations. I am particularly interested in building AI systems that bridge the gap between predictive performance and scientific interpretability.
            </p>

            <p className="intro-text">
              Before pursuing my Ph.D., I earned my M.Tech in Computer Science from IIT Patna and spent three years as a Full-Stack Developer at Publicis Sapient, where I built production-scale applications using React, AWS, Spark, and Scala. I have also completed research internships at Qualcomm and Sandisk, applying generative AI, multimodal foundation models, and agentic systems to real-world engineering challenges.
            </p>

            <p className="intro-text">
              Beyond research, I enjoy mentoring students, public speaking through Toastmasters, and practicing meditation and yoga. I am passionate about developing AI technologies that advance scientific discovery while remaining practical, transparent, and accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

