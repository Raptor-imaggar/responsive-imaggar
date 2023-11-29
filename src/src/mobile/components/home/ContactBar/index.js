import React from 'react';
import './contactBar.css';

const ContactBar = () => {
  return (
    <div className='mobile-contactBar-container'>
      <div className="mobile-contact-bar">
        <div className="mobile-sub-div left-div">
          <p>Shape the New Era of Customer Service with Generative AI</p>
        </div>
        <div className="mobile-sub-div right-div">
          <button className='mobile-getademo-button'>Get A Demo</button>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
