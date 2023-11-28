import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './MobileHeader.css';
import headerMenu from '../../../../../data/menu';

const MobileHeader = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const sidebarRef = useRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setSelectedMenuItem(null);
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
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
  <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
  </div>
  <nav className={`mobile-navbar ${isMobileMenuOpen ? 'open' : ''}`} ref={sidebarRef}>
    <div className="mobile-close-icon" onClick={toggleMobileMenu}>
      <FiX />
    </div>
    <div className="mobile-logo-sidebar">
      <img src='./logo.png' alt="Logo" />
    </div>
    <ul className="mobile-nav__links">
      {headerMenu.map((item, index) => (
        <li key={index} className="mobile-nav--link">
          <a href="#" onClick={() => handleMenuItemClick(item)}>
            {item.name.en}
          </a>
        </li>
      ))}
    </ul>
    {selectedMenuItem && selectedMenuItem.submenu && (
      <div className="mobile-submenu">
        <ul>
          {selectedMenuItem.submenu.map((subItem, subIndex) => (
            <li key={subIndex} className="mobile-submenu-item">
              <a href={subItem.url}>{subItem.name.en}</a>
            </li>
          ))}
        </ul>
      </div>
    )}
  </nav>
</header>
  );
};

export default MobileHeader;
