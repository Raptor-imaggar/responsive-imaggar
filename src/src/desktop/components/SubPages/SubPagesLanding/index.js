import React from 'react';
import Site_landingContent from '../../../../../../data/products/SiteData';
import "./SubPagesLanding.css";

const SubPagesLanding = () => {
  const { title, paragraph, buttonText, imageUrl, imageAlt, demoLink, minititle } = Site_landingContent.SubPagesLandingContent;

  return (
    <div className="Site_landing-row-fluid">
      
      <div className="Site_landing-col">
        <div className="Site_landing-text-col">
          <p className=' Site_landing-praragraph Site-landing-text'>{minititle}</p>
          <h1 className='Site-landing-text'>{title}</h1>
          <p className='Site_landing-praragraph Site-landing-text'>{paragraph}</p>
          <div className="SubPagesLanding-buttons-row">
            <a className="button-Site_landingpage section-link Site-landing-text" href={demoLink}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div className="Site_landing-col">
        <div className="Site_landing-image-col">
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    </div>
  );
};

export default SubPagesLanding;
