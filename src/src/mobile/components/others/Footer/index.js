import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './MobileFooter.css';
import { footerData } from '../../../../../data/footer';
import CopyrightFooter from '../copyrightFooter';
import MobileSocialMediaFooter from '../MobilesocialMediaFooter';


const MobileFooter = () => {
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.label}</a>
      </li>
    ));
  };

  return (
    <>
      <footer className="mobile-footer">
        <div className="mobile-footer-container mobile-footer-row">
          {footerData.map((section, index) => (
            <div className="mobile-footer-col mobile-margin-footer" key={index}>
              <h4>{section.title}</h4>
              <ul>{renderLinks(section.links)}</ul>
            </div>
          ))}
          
          <div className="mobile-footer-col-2 ">
            <div className="mobile-form-sect-tem2 mobile-margin-footer">
              <div className="mobile-tem-social-i">
                <h4>Subscribe</h4>
                <div className="mobile-subscribe">
                  <input type='email' placeholder="Subscribe" />
                  <button>Subscribe</button>
                </div>
                <div className="Mobilefooterdes mobile-followus-text">
                  {/* Social media links */}
              
                  <p>Shape the New Era of Customer Service with Generative AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <MobileSocialMediaFooter />
      <CopyrightFooter />
      
      
    </>
  );
};

export default MobileFooter;
