// MobilesocialMediaFooter.js

import React from 'react';
import './MobilesocialMediaFooter.css';
import { socialMediaData } from '../../../../../data/footer';


const MobilesocialMediaFooter = () => {
  const { logo, socialIcons, otherIcons } = socialMediaData;

  return (
    <div className='MobilesocialMediaFooter-main'>
      <div className='MobilesocialMediaFooter-left'>
        <a href="https://your-website-url.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt='Footer Logo' className='mobile-footer-logo' />
        </a>
        {socialIcons.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            {React.createElement(item.icon, { className: 'mobile-footersocial-icon' })}
          </a>
        ))}
      </div>
      <div className='MobilesocialMediaFooter-right'>
        {otherIcons.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer">
            {React.createElement(item.icon, { className: 'mobile-footer-icon' })}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobilesocialMediaFooter;
