// Header.js
import React, { useState, useEffect } from 'react';
import { TbSpeakerphone , TbDoorExit } from 'react-icons/tb';
import headerMenu from '../../../../../data/menu';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [notification, setNotification] = useState({
    message: 'This is your default notification message.',
    visible: true,
  });

  const handleAnnouncementClose = () => {
    setNotification({ ...notification, visible: false });
    document.querySelector('.header-div').style.top = '0';
  };

  const menuItems = headerMenu.map((item) => item.name.en);

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header-div ${scrolled ? 'shadow' : ''}`}>
      {notification.visible && (
        <div className={`notification-bar ${notification.visible ? 'active' : ''}`}>
          <span className={`notification-message ${notification.visible ? 'visible' : ''}`}>
            <TbSpeakerphone className="phone-icon" /> {notification.message}
          </span>
          <button className='notification-close-button' onClick={handleAnnouncementClose}>
           <TbDoorExit />
          </button>
        </div>
      )}

      <div className="header-container">
        <div className="logo-container">
          <h1 className="logo">
            <img src="/logo.png" alt="logo" />
          </h1>
        </div>

        <div className="button-container">
          {menuItems.map((item, index) => (
            <a key={index} href={item.url}>
              <button className="header-button">{item}</button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
