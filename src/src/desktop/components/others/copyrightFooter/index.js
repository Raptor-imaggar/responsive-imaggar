// SecondFooter.js

import React, { useEffect, useState } from 'react';
import './copyrightFooter.css';
import { TbSpeakerphone } from 'react-icons/tb';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const SecondFooter = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showAnnouncementBar, setShowAnnouncementBar] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(intervalId);
  }, []); // Run once on component mount

  const closeAnnouncementBar = () => {
    setShowAnnouncementBar(false);
  };

  return (
    <div>
      <footer className={`second-footer ${showAnnouncementBar ? '' : 'no-margin'}`}>
        <div className="copyright-main-container">
          <div className="copyright-container">
            <div className="copyright-content">
              <ul className="copyright-list">
                <li><a href="/legal" className="copyright-text-hover">Legal</a></li>
                <li><a href="/privacy-notice" className="copyright-text-hover">Privacy Notice</a></li>
                <li><a href="/site-terms" className="copyright-text-hover">Site Terms</a></li>
                <li><a href="/cookie-policy" className="copyright-text-hover">Cookie Policy</a></li>
                <li><a href="/security" className="copyright-text-hover">Security</a></li>
                <li><a href="/accessibility" className="copyright-text-hover">Accessibility</a></li>
                <li><a href="/unsubscribe" className="copyright-text-hover">Unsubscribe</a></li>
                <li><a href="/sitemap" className="copyright-text-hover">Sitemap</a></li>
              </ul>
              <p className="copyright-text copyright-text-hover">&copy; {currentYear} IMAGGAR Technology Pvt Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className={`announcement-bar ${showAnnouncementBar ? '' : 'fade-out'}`}>
        <div className='announcement-bar-container'>
          <a href="#" className="announcement-content">
            <TbSpeakerphone className="announcement-icon" />
            <p>This is an important announcement.</p>
          </a>
        </div>
        <AiOutlineCloseCircle className="close-icon" onClick={closeAnnouncementBar} />
      </div>
    </div>
  );
};

export default SecondFooter;
