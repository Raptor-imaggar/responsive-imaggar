// socialMediaFooter.js

import React from 'react';
import './socialMediaFooter.css';
import { socialMediaData } from '../../../../../data/footer';


const SocialMediaFooter = () => {
  const { logo, socialIcons, otherIcons } = socialMediaData;

  return (
    <div className='socialMediaFooter-main'>
      <div className='socialMediaFooter-left'>
        <a href="https://your-website-url.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt='Footer Logo' className='footer-logo' />
        </a>
       
      </div>
      <div className='socialMediaFooter-right'>
      {socialIcons.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            {React.createElement(item.icon, { className: 'footersocial-icon' })}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaFooter;
