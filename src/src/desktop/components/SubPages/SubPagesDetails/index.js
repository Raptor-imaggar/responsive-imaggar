// SiteDetails.js

import React from 'react';
import SiteComponentContent from '../../../../../../data/products/SiteData';
import "./SiteDetails.css";

const SiteDetails = () => {
  return (
    <div className='SiteDetails-main'>
      <div className='siteDetailsContentIntro-container'>
        <h1 className='siteDetailsContentIntro-heading'>{SiteComponentContent.siteDetailsIntro.heading}</h1>
        <p className='siteDetailsContentIntro-paragraph Site-details-text'>{SiteComponentContent.siteDetailsIntro.paragraph}</p>
      </div>
      {SiteComponentContent.siteDetailsContent.map((content, index) => (
        <div className={`Site-details-row-fluid ${index % 2 === 0 ? 'Site-details-odd' : 'Site-details-even'}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="Site-details-col">
                <div className="Site-details-image-col">
                  <img src={content.imageUrl} alt={content.imageAlt} />
                </div>
              </div>
              <div className="Site-details-col">
                <div className="Site-details-text-col">
                  <p className='Site-details-paragraph Site-details-text'>{content.title}</p>
                  <h1 className='Site-details-text'>{content.heading}</h1>
                  <p className='Site-details-paragraph Site-details-text'>{content.paragraph}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="Site-details-col">
                <div className="Site-details-text-col">
                  <p className='Site-details-paragraph Site-details-text'>{content.title}</p>
                  <h1 className='Site-details-text'>{content.heading}</h1>
                  <p className='Site-details-paragraph Site-details-text'>{content.paragraph}</p>
                </div>
              </div>
              <div className="Site-details-col">
                <div className="Site-details-image-col">
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

export default SiteDetails;
