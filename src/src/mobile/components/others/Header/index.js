import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX, FiArrowLeft } from 'react-icons/fi';
import { SiIfixit } from "react-icons/si";
import './MobileHeader.css';
import headerMenu from '../../../../../data/menu';

const MobileHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [currentMenuLevel, setCurrentMenuLevel] = useState(0);
  const sidebarRef = useRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setSelectedMenuItem(null);
    setCurrentMenuLevel(0); // Reset to top-level menu
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
    setCurrentMenuLevel(currentMenuLevel + 1);
  };

  const handleBackButtonClick = () => {
    setCurrentMenuLevel(Math.max(0, currentMenuLevel - 1));
  };

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="mobile-header">
      <div className="mobile-logo">
        <img src='./logo.png' alt="Logo" />
      </div>
      {isMobileMenuOpen ? (
        <div className="mobile-close-icon" onClick={toggleMobileMenu}>
          <SiIfixit />
        </div>
      ) : (
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <FiMenu />
        </div>
      )}
      {isMobileMenuOpen && (
        <nav className={`mobile-navbar ${isMobileMenuOpen ? 'open' : ''}`} ref={sidebarRef}>
          <div className="mobile-sidebar-header">
            <div className="mobile-logo-sidebar">
              <img src='./logo.png' alt="Logo" />
            </div>
            {currentMenuLevel > 0 && (
              <div className="mobile-back-icon" onClick={handleBackButtonClick}>
                <FiArrowLeft />
              </div>
            )}
          </div>
          {currentMenuLevel === 0 ? (
            <ul className="mobile-nav__links">
            {headerMenu.map((item, index) => (
             <li key={index} className="mobile-nav--link">
               <a href="#" onClick={() => handleMenuItemClick(item)}>
                 {item.icon} {item.name.en}
               </a>
             </li>
           ))}
            </ul>
          ) : (
            <div className="mobile-submenu">
              <ul>
              {selectedMenuItem.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="mobile-submenu-item">
                    <img src={subItem.image} alt="Submenu Item" className="submenu-image" />
                    <a href={subItem.url}>{subItem.name.en}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;