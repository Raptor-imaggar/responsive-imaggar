// ProSerDetails.js

import React from 'react';
import ProSerComponentContent from '../../../../../../data/ProSer/ProSerData';
import "./ProSerDetails.css";

const ProSerDetails = () => {
  return (
    <div className='ProSerDetails-main'>
      <div className='ProSerDetailsContentIntro-container'>
        <h1 className='ProSerDetailsContentIntro-heading'>{ProSerComponentContent.ProSerDetailsIntro.heading}</h1>
        <p className='ProSerDetailsContentIntro-paragraph ProSer-details-text'>{ProSerComponentContent.ProSerDetailsIntro.paragraph}</p>
      </div>
      {ProSerComponentContent.ProSerDetailsContent.map((content, index) => (
        <div className={`ProSer-details-row-fluid ${index % 2 === 0 ? 'ProSer-details-odd' : 'ProSer-details-even'}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="ProSer-details-col">
                <div className="ProSer-details-image-col">
                  <img src={content.imageUrl} alt={content.imageAlt} />
                </div>
              </div>
              <div className="ProSer-details-col">
                <div className="ProSer-details-text-col">
                  <p className='ProSer-details-paragraph ProSer-details-text'>{content.title}</p>
                  <h1 className='ProSer-details-text'>{content.heading}</h1>
                  <p className='ProSer-details-paragraph ProSer-details-text'>{content.paragraph}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="ProSer-details-col">
                <div className="ProSer-details-text-col">
                  <p className='ProSer-details-paragraph ProSer-details-text'>{content.title}</p>
                  <h1 className='ProSer-details-text'>{content.heading}</h1>
                  <p className='ProSer-details-paragraph ProSer-details-text'>{content.paragraph}</p>
                </div>
              </div>
              <div className="ProSer-details-col">
                <div className="ProSer-details-image-col">
                  <img src={content.imageUrl} alt={content.imageAlt} />
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProSerDetails;
