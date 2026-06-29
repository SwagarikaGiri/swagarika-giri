import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv">
      <h1>CV</h1>
      <div className="cv-content">
        <p>
          You can download my CV in PDF format below, or view it embedded here.
        </p>
        <div className="cv-download">
          <a
            href={`${process.env.PUBLIC_URL}/Swagarika_Giri_2026_Resume.pdf`}
            download
            className="cv-download-button"
          >
            Download CV (PDF)
          </a>
        </div>
        <div className="cv-embed">
          <iframe
            src={`${process.env.PUBLIC_URL}/Swagarika_Giri_2026_Resume.pdf`}
            title="CV PDF"
            className="cv-pdf"
          >
            <p>
              Your browser does not support PDFs.
              <a href={`${process.env.PUBLIC_URL}/Swagarika_Giri_2026_Resume.pdf`}>Download the PDF</a> instead.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default CV;

