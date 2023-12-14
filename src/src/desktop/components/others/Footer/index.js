import React from 'react';
import './Footer.css';
import { footerData } from '../../../../../data/footer';
import CopyrightFooter from '../copyrightFooter';
import SocialMediaFooter from '../socialMediaFooter';

const Footer = () => {
  const renderLinks = (links) => {
    return links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.label}</a>
      </li>
    ));
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container footer-row">
          {footerData.map((section, index) => (
            <div className="footer-col margin-footer" key={index}>
              <h4>{section.title}</h4>
              <ul>{renderLinks(section.links)}</ul>
            </div>
          ))}
          
          <div className="footer-col-2">
            <div className="form-sect-tem2 margin-footer">
              <div className="">
                <h4>Subscribe</h4>
                <div className="subscribe">
                  <input type='email' placeholder="Subscribe" />
                  <button>Subscribe</button>
                </div>
                <div className="footerdes">
                  <h4>Des</h4>
                  {/* Replace social links with a paragraph */}
                  <p>Shape the New Era of Customer Service with Generative AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <SocialMediaFooter />
      <CopyrightFooter />
    </>
  );
};

export default Footer;
