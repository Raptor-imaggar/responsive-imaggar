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
        <div className="container">
          <div className="copyright-container">
            <p>&copy; {currentYear} IMAGGAR Technology Pvt Ltd. All Rights Reserved.</p>
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
