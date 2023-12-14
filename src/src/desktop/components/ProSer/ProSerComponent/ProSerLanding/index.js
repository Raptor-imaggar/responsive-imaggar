import React from 'react';
import ProSer_landingContent from '../../../../../../data/ProSer/ProSerData';
import "./ProSerLanding.css";
import ProSerClients from '../ProSerClients';

const ProSerLanding = () => {
  const { title, paragraph, buttonText, imageUrl, imageAlt, demoLink, minititle } = ProSer_landingContent.ProSerlandingContent;

  return (
    <div className="ProSer_landing-row-fluid">
    <div className="ProSer_landing-container">
      <div className="ProSer_landing-col">
        <div className="ProSer_landing-text-col">
          <p className=' ProSer_landing-praragraph ProSer-landing-text'>{minititle}</p>
          <h1 className='ProSer-landing-text'>{title}</h1>
          <p className='ProSer_landing-praragraph ProSer-landing-text'>{paragraph}</p>
          <div className="ProSerlanding-buttons-row">
            <a className="button-ProSer_landingpage section-link ProSer-landing-text" href={demoLink}>
              {buttonText}
            </a>
          </div>
        </div>
      </div>
      <div className="ProSer_landing-col">
        <div className="ProSer_landing-image-col">
          <img src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    </div>
    <ProSerClients />
  </div>
);
};

export default ProSerLanding;