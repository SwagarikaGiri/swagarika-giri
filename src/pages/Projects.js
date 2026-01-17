import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    // {
    //   title: "IntegGO",
    //   description:
    //     "A multimodal protein function annotation framework integrating protein sequence, structure, interaction networks, and biomedical literature. Uses a Q-Former–based architecture combined with GraphRAG and literature-driven RAG to generate GO annotations and human-readable functional descriptions, handling missing modalities via multi-hop reasoning.",
    //   technologies: [
    //     "LLMs",
    //     "GraphRAG",
    //     "Lit-RAG",
    //     "Q-Former",
    //     "Bioinformatics"
    //   ],
    //   link: "",
    //   github: ""
    // },
    {
      title: "GO2Sum",
      description:
        "An LLM-based system that translates Gene Ontology term lists into coherent, human-readable functional summaries. Demonstrated significant improvements in interpretability over prior models and published in NPJ Systems Biology and Applications.",
      technologies: [
        "LLMs",
        "Natural Language Generation",
        "Gene Ontology"
      ],
      period: "January 2022 - January 2024",
      company: "Kihara Lab",
      paperLink: "https://www.nature.com/articles/s41540-024-00358-0",
      appLink: "https://kiharalab.org/go2sum_server/",
      github: "https://github.com/kiharalab/GO2Sum"
    },
    {
      title: "Lit-PFP",
      description:
        "A literature-driven protein function prediction pipeline built over 40M+ biomedical papers. Employs BM25 and FAISS-based retrieval to aggregate evidence for predicting functions of novel and sparsely annotated proteins.",
      technologies: [
        "RAG",
        "BM25",
        "FAISS",
        "Protein Function Prediction"
      ],
      period: "April 2025 - Ongoing",
      company: "Kihara Lab",
      link: "",
      github: ""
    },
    {
      title: "Queryome",
      description:
        "A query-centric framework for grounding protein function understanding in scientific literature. Supports protein-centric and GO-centric queries by combining dense retrieval, symbolic constraints, and LLM-based reasoning for flexible biological knowledge exploration.",
      technologies: [
        "LLMs",
        "Agentic System",
        "Information Retrieval",
        "Scientific Literature Mining"
      ],
      period: "April 2025 - December 2025",
      company: "Kihara Lab",
      appLink: "https://www.queryome.app/",
      paperLink: "https://www.biorxiv.org/content/10.64898/2025.12.22.696019v1",
      github: "https://github.com/kiharalab/queryome"
    },
    {
      title: "GraphRAG-PFP",
      description:
        "A knowledge-graph-based protein function prediction system integrating sequence, structure, and protein–protein interaction data. Enables multi-hop reasoning over protein knowledge graphs to improve robustness for low-annotation proteins.",
      technologies: [
        "GraphRAG",
        "Knowledge Graphs",
        "Machine Learning"
      ],
      period: "April 2025 - Ongoing",
      company: "Kihara Lab",
      link: "",
      github: ""
    },
    {
      title: "MultiPredGO",
      description:
        "A deep multimodal protein function prediction model that integrates protein structure, sequence, and protein–protein interaction networks. Included a full-stack web application deployment on AWS and was published in IEEE JBHI.",
      technologies: [
        "Deep Learning",
        "Bioinformatics",
        "AWS"
      ],
      period: "January 2019 - January 2020",
      company: "IIT Patna",
      paperLink: "https://pubmed.ncbi.nlm.nih.gov/32897865/",
      github: "https://github.com/SwagarikaGiri/Multi-PredGO"
    },
    {
      title: "Parkinson's Disease Detection via Gait Analysis",
      description:
        "A biomedical machine learning system for detecting Parkinson's disease using gait analysis. Led a team to explore feature extraction and transfer learning techniques across multiple datasets for early diagnosis and monitoring.",
      technologies: [
        "Computer Vision",
        "Machine Learning",
        "Healthcare AI"
      ],
      link: "",
      github: ""
    },
    {
      title: "LLM-based Travel Planning System",
      description:
        "An intelligent travel planning system that generates optimized itineraries under real-world constraints. Integrated external APIs for flights, cab routing, and distance estimation. Implemented feasibility validation to ensure itinerary consistency and execution realism. Patent filed.",
      technologies: [
        "LLMs",
        "API Integration",
        "Travel Planning",
        "Constraint Optimization"
      ],
      period: "May 2024 - August 2024",
      company: "Qualcomm",
      link: "",
      github: ""
    },
    {
      title: "Writer Recognition System for Indian Bank Cheques",
      description:
        "A computer vision system for writer recognition on Indian bank cheques. Led development of the system applying advanced image processing and feature extraction techniques on 30K handwritten samples for automated cheque verification.",
      technologies: [
        "Image Processing",
        "Feature Extraction",
        "Pattern Recognition",
        "Computer Vision"
      ],
      period: "May 2016 - July 2016",
      company: "ISI Kolkata",
      link: "",
      github: ""
    }
  ];

  return (
    <div className="projects">
      <h1>Projects</h1>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="project-header">
              <h2>{project.title}</h2>
              <div className="project-meta">
                {project.company && (
                  <span className="project-company">{project.company}</span>
                )}
                {project.company && project.period && (
                  <span className="project-meta-separator"> · </span>
                )}
                {project.period && (
                  <span className="project-period">{project.period}</span>
                )}
              </div>
            </div>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.appLink && (
                <a
                  href={project.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View App"
                >
                  <span className="link-icon">🌐</span> App
                </a>
              )}
              {project.paperLink && (
                <a
                  href={project.paperLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View Paper"
                >
                  <span className="link-icon">📄</span> Paper
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  title="View on GitHub"
                >
                  <span className="link-icon">💻</span> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
