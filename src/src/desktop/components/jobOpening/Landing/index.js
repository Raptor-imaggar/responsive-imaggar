// Landing.js
import React from 'react';
import CareersComponentContent from '../../../../../data/careers/CareersData';
import './Landing.css';

const Landing = () => {
  const {
    title,
    description: paragraph,
    buttonText,
  } = CareersComponentContent.intro;

  return (
    <div className="Landing-row-fluid">
      <div className="Landing-container">
        <div className="Landing-col">
          <div className="Landing-text-col">
            <h1 className="Landing-heading">{title}</h1>
            <p className="Landing-paragraph">{paragraph}</p>
            <div className="Landing-buttons-row">
              <a className="Landing-button section-link" href="/careers">
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
