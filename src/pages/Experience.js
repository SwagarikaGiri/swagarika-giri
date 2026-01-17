import React from 'react';
import './Experience.css';

const Experience = () => {
  const getLogoUrl = (company) => {
    const logoMap = {
      "Purdue University": `${process.env.PUBLIC_URL}/purdue.png`,
      "Purdue University – Kihara Lab": `${process.env.PUBLIC_URL}/purdue.png`,
      "Qualcomm": `${process.env.PUBLIC_URL}/qualcomm.png`,
      "IIT Patna": `${process.env.PUBLIC_URL}/iitpatna.webp`,
      "IIT Patna – AI-ML-NLP Lab": `${process.env.PUBLIC_URL}/iitpatna.webp`,
      "Indian Statistical Institute (ISI), Kolkata": `${process.env.PUBLIC_URL}/isi_kolkata.jpg`,
      "Publicis Groupe": `${process.env.PUBLIC_URL}/publicis_sapient.jpg`,
      "Publicis Groupe (Client: CJ Affiliate)": `${process.env.PUBLIC_URL}/cj-affiliate-logo.png`,
      "Publicis Groupe (Client: MLC Australia)": `${process.env.PUBLIC_URL}/publicis_sapient.jpg`
    };
    return logoMap[company] || null;
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 200; // Height of sticky navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const researchExperience = [
    {
      title: "PhD Researcher, Computer Science",
      company: "Purdue University – Kihara Lab",
      location: "West Lafayette, IN, USA",
      period: "Jan 2022 – Present",
      logo: getLogoUrl("Purdue University – Kihara Lab"),
      description: [
        "Developing large-scale protein function prediction frameworks using LLMs, PLMs, RAG, and GraphRAG.",
        "Designed IntegGO, a Q-Former–based multimodal system integrating sequence, structure, networks, and literature for GO annotation.",
        "Built Lit-RAG pipeline leveraging BM25 and FAISS over 40M+ biomedical papers for up-to-date evidence retrieval.",
        "Implemented GraphRAG-based multi-hop reasoning over protein knowledge graphs.",
        "Developed GO2Sum, an LLM-based model for generating human-readable protein functional summaries.",
        "Performed CAFA-style evaluation using Fmax, AUPR, and Smin across multiple benchmark datasets."
      ]
    },
    {
      title: "Research Intern (Patent Filed)",
      company: "Qualcomm",
      location: "USA",
      period: "May 2024 – Aug 2024",
      logo: getLogoUrl("Qualcomm"),
      description: [
        "Designed an LLM-based travel planning system that generates optimized itineraries under real-world constraints.",
        "Integrated external APIs for flights, cab routing, and distance estimation.",
        "Implemented feasibility validation to ensure itinerary consistency and execution realism."
      ]
    },
   
  
    {
      title: "M.Tech Researcher",
      company: "IIT Patna – AI-ML-NLP Lab",
      location: "Patna, India",
      period: "Jun 2017 – Jun 2019",
      logo: getLogoUrl("IIT Patna – AI-ML-NLP Lab"),
      description: [
        "Developed MultiPredGO, a multimodal deep learning framework combining structure, sequence, and PPIN data.",
        "Formulated multi-view gene clustering as a multi-objective optimization problem.",
        "Built and deployed a full-stack web application on AWS for protein function prediction."
      ]
    },
    {
      title: "Research Intern",
      company: "Indian Statistical Institute (ISI), Kolkata",
      location: "Kolkata, India",
      period: "May 2016 – Jul 2016",
      logo: getLogoUrl("Indian Statistical Institute (ISI), Kolkata"),
      description: [
        "Led development of a writer recognition system for Indian bank cheques.",
        "Applied image processing and feature extraction on 30K handwritten samples."
      ]
    }
  ];

  const workExperience = [
    {
      title: "Associate Software Development Engineer II",
      company: "Publicis Groupe (Client: CJ Affiliate)",
      location: "Bangalore, India",
      period: "Jul 2020 – Nov 2021",
      logo: getLogoUrl("Publicis Groupe (Client: CJ Affiliate)"),
      description: [
        "Core contributor to release planning, architecture design, and tech-stack finalization.",
        "Developed scalable data transfer systems using Scala, Spark, and AWS.",
        "Built and deployed a Shopify app using React, AWS Lambda, Jest, and Jenkins."
      ]
    },
    {
      title: "Senior React Developer",
      company: "Publicis Groupe (Client: MLC Australia)",
      location: "Bangalore, India",
      period: "Jul 2019 – Apr 2020",
      logo: getLogoUrl("Publicis Groupe (Client: MLC Australia)"),
      description: [
        "Developed enterprise front-end applications using React, Node.js, JavaScript, and CSS.",
        "Collaborated with design and backend teams to deliver production-grade insurance platforms."
      ]
    },
    {
      title: "Graduate Teaching Assistant",
      company: "Purdue University",
      location: "West Lafayette, IN, USA",
      period: "Jan 2022 – Present",
      logo: getLogoUrl("Purdue University"),
      description: [
        "Teaching Assistant for CS573 (Data Mining) and CS182 (Foundations of Computer Science).",
        "Conducted office hours, problem-solving sessions, and grading for classes with ~870 students.",
        "Received Graduate Teaching Award for excellence in teaching."
      ]
    },
  
   
    {
      title: "Graduate Teaching Assistant",
      company: "IIT Patna",
      location: "Patna, India",
      period: "Jul 2017 – Jun 2019",
      logo: getLogoUrl("IIT Patna"),
      description: [
        "Teaching Assistant for CS341 (Operating Systems) and CS564 (Introduction to Machine Learning).",
        "Coordinated assignments, vivas, and capstone projects for 100+ students."
      ]
    }
  ];

  const renderSection = (title, data, sectionId) => (
    <>
      <h2 id={sectionId} className="subsection-title">{title}</h2>
      <div className="experience-list">
        {data.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div className="experience-header-left">
                {exp.logo && (
                  <div className="company-logo">
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="experience-info">
                  <h3 className="role">{exp.title}</h3>
                  <div className="org">{exp.company} · {exp.location}</div>
                </div>
              </div>
              <div className="period">{exp.period}</div>
            </div>
            <ul className="experience-description">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className="experience">
      <div className="experience-header-section">
        <div className="experience-navigation">
          <button 
            className="nav-link-button" 
            onClick={() => scrollToSection('research-experience')}
          >
            Research Experience
          </button>
          <button 
            className="nav-link-button" 
            onClick={() => scrollToSection('professional-experience')}
          >
            Professional Experience
          </button>
        </div>
      </div>
      {renderSection("Research Experience", researchExperience, "research-experience")}
      {renderSection("Professional Experience", workExperience, "professional-experience")}
    </div>
  );
};

export default Experience;
