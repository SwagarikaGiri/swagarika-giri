import React from 'react';
import './Publications.css';

const Publications = () => {
  // Function to highlight author name
  const highlightAuthor = (authors) => {
    // Patterns to match: "S. J. Giri", "S.J. Giri", "Swagarika", "Swagarika J. Giri", "Swagarika Jaharlal Giri"
    const patterns = [
      /S\.\s*J\.\s*Giri/g,
      /Swagarika\s+J\.?\s*Giri/g,
      /Swagarika\s+Jaharlal\s+Giri/g,
      /Swagarika/g
    ];
    
    let highlighted = authors;
    patterns.forEach(pattern => {
      highlighted = highlighted.replace(pattern, (match) => {
        return `<span class="author-highlight">${match}</span>`;
      });
    });
    
    return highlighted;
  };

  const publications = [
    {
      year: "2025",
      papers: [
        {
          title: "Queryome: Orchestrating Retrieval, Reasoning, and Synthesis across Biomedical Literature",
          authors: "P. Punuru, N. Ibtehaz, S. J. Giri, H. Srirangam, E. Tugolukova, D. Kihara",
          venue: "bioRxiv",
          link: "https://www.biorxiv.org/content/10.64898/2025.12.22.696019v1"
        },
        {
          title: "Translating a GO term list to human readable function description using GO2Sum",
          authors: "S. J. Giri, U. Pandey, J. H. Park, D. Kihara",
          venue: "Methods in Molecular Biology",
          link: "https://pubmed.ncbi.nlm.nih.gov/40601252/"
        },
        {
          title: "NaviGO: An Interactive Tool for Gene Ontology Functional Analysis with Free Text GO Summaries",
          authors: "S. J. Giri, U. Pandey, J. H. Park, D. Kihara",
          venue: "Methods in Molecular Biology",
          link: "https://pubmed.ncbi.nlm.nih.gov/40728622/"
        },
        {
          title: "Identifying Hidden Moonlighting Proteins and Domains",
          authors: "S. J. Giri, N. Ibtehaz, L. Kurgan, D. Kihara",
          venue: "Methods in Molecular Biology",
          link: "https://www.sciencedirect.com/science/chapter/edited-volume/abs/pii/B9780443157196000131"
        },
        {
          title: "Proteomic analysis of unicellular cyanobacterium Crocosphaera subtropica ATCC 51142 under extended light and dark growth",
          authors: "P. Panda, S. J. Giri, L. Sherman, D. Kihara, U. Aryal",
          venue: "Journal of Proteome Research",
          link: "https://pubmed.ncbi.nlm.nih.gov/39131394/"
        },
        {
          title: "Proteomic changes orchestrate metabolic acclimation of a unicellular diazotropic cyanobacterium during light dark cycle and nitrogen fixation states",
          authors: "P. Panda, S. J. Giri, L. Sherman, D. Kihara, U. Aryal",
          venue: "Scientific Reports (Minor Revision)",
          link: "https://pubmed.ncbi.nlm.nih.gov/39131303/"
        }
      ]
    },
    {
      year: "2024",
      papers: [
        {
          title: "GO2SUM: Generating human readable functional summary from GO terms",
          authors: "S. J. Giri, N. Ibtehaz, D. Kihara",
          venue: "NPJ Systems Biology and Applications",
          link: "https://www.nature.com/articles/s41540-024-00358-0"
        },
        {
          title: "Chromosome level genome assembly of the Etruscan shrew Suncus etruscus",
          authors: "Y. V. Bukhman et al., S. J. Giri, D. Kihara et al.",
          venue: "Scientific Data",
          link: "https://www.nature.com/articles/s41597-024-03011-x"
        }
      ]
    },
    {
      year: "2020",
      papers: [
        {
          title: "MultiPredGO: Deep Multi-Modal Protein Function Prediction by Amalgamating Protein Structure, Sequence, and Interaction Information",
          authors: "S. J. Giri, P. Dutta, P. Halani, S. Saha",
          venue: "IEEE Journal of Biomedical and Health Informatics",
          link: "https://pubmed.ncbi.nlm.nih.gov/32897865/"
        },
        {
          title: "Multi-View Gene Clustering using Gene Ontology and Expression-based Similarities",
          authors: "S. J. Giri, S. Saha",
          venue: "IEEE Congress on Evolutionary Computation (CEC), Glasgow, UK",
          link: "https://ieeexplore.ieee.org/document/9185885"
        }
      ]
    }
  ];

  return (
    <div className="publications">
      <h1>Publications</h1>

      {publications.map((group, idx) => (
        <div key={idx} className="publication-year-group">
          <h2 className="publication-year">{group.year}</h2>

          <ol className="publication-list">
            {group.papers.map((paper, index) => (
              <li key={index} className="publication-item">
                {paper.link ? (
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="paper-title-link"
                  >
                    <span className="paper-title">{paper.title}</span>
                  </a>
                ) : (
                  <span className="paper-title">{paper.title}</span>
                )}
                <br />
                <span 
                  className="paper-authors" 
                  dangerouslySetInnerHTML={{ __html: highlightAuthor(paper.authors) }}
                ></span><br />
                <span className="paper-venue">{paper.venue}</span>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Publications;
