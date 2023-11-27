import React, { useState, useEffect } from 'react';
import './Header.css';
import headerMenu from '../../../../../data/menu';

const Header = () => {
  const [currentNav, setCurrentNav] = useState(null);
  const [navsVisited, setNavsVisited] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMouseEnter = (e, item) => {
    setCurrentNav(item.name.en);

    setNavsVisited({
      ...navsVisited,
      [item.name.en]: true,
    });
  };

  const handleMouseLeave = () => {
    setCurrentNav(null);
  };

  const handleScroll = () => {
    // Set isScrolled to true when the user has scrolled down
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <div className="logo">
        <img src='./logo.png' alt="Logo" />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <ul className="nav__links">
          {headerMenu.map((item, index) => (
            <li
              key={index}
              data-expand={item.name.en}
              className={`nav--link ${currentNav === item.name.en || navsVisited[item.name.en] ? 'hover' : ''}`}
              onMouseEnter={(e) => handleMouseEnter(e, item)}
              onMouseLeave={handleMouseLeave}
            >
              {item.name.en}
              {item.submenu && currentNav === item.name.en && (
                <ul className={`submenu ${currentNav === item.name.en ? 'active' : ''}`}>
                  <div className="submenu-list">
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex} className="submenu-item-container">
                        <li>
                          <a href={subItem.url}>
                            <img src={subItem.image} alt={subItem.name.en} className="submenu-icon" />
                            {subItem.name.en}
                          </a>
                        </li>
                      </div>
                    ))}
                  </div>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Buttons */}
      <div className="buttons">
        <a href="#" className="login-btn">Login</a>
        <a href="#" className="get-started-btn">Get Started</a>
      </div>
    </header>
  );
};

export default Header;
