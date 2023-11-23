import React, { useState } from 'react';
import './Header.css';
import headerMenu from '../../../../../data/menu';

const Header = () => {
  const [currentNav, setCurrentNav] = useState(null);
  const [navsVisited, setNavsVisited] = useState({});

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

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src='./logo.png' />
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
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.url}>{subItem.name.en}</a>
                    </li>
                  ))}
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
