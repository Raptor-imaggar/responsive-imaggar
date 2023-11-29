import React, { useEffect, useState } from 'react';
import './mobileSecondFooter.css';
import { TbSpeakerphone } from 'react-icons/tb';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const MobileSecondFooter = () => {
  const [mobileCurrentYear, setMobileCurrentYear] = useState(new Date().getFullYear());
  const [mobileShowAnnouncementBar, setMobileShowAnnouncementBar] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMobileCurrentYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(intervalId);
  }, []); // Run once on component mount

  const mobileCloseAnnouncementBar = () => {
    setMobileShowAnnouncementBar(false);
  };

  // Add a condition to render only on mobile
  const isMobile = window.innerWidth <= 767;

  if (!isMobile) {
    return null; // Render nothing if not on mobile
  }

  return (
    <div>
      <footer className={`mobile-second-footer ${mobileShowAnnouncementBar ? '' : 'no-margin'}`}>
        <div className="mobile-second-footer-container">
          <div className="mobile-copyright-container">
            <p>&copy; {mobileCurrentYear} IMAGGAR Technology Pvt Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <div className={`mobile-announcement-bar ${mobileShowAnnouncementBar ? '' : 'fade-out'}`}>
        <div className='mobile-announcement-bar-container'>
          <a href="#" className="mobile-announcement-content">
            <TbSpeakerphone className="mobile-announcement-icon" />
            <p>This is an important announcement.</p>
          </a>
        </div>
        <AiOutlineCloseCircle className="mobile-announcement-close-icon" onClick={mobileCloseAnnouncementBar} />
      </div>
    </div>
  );
};

export default MobileSecondFooter;
