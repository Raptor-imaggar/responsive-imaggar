import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './SubscribePopup.css';

import Poster from './poster.png';

const SubscribePopup = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Implement your subscription logic here
    console.log('Subscribed with email:', email);
    // You can also close the popup after successful submission
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    // If you have additional closing animations, you can add them here
  };

  useEffect(() => {
    // Show the popup after a delay (5 seconds in this example)
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timeoutId); // Clear the timeout on unmount

  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className={`popup-subscribe-main ${isVisible ? 'visible' : ''}`}>
      <div className="popup-image" style={{ backgroundImage: `url(${Poster})` }}></div>
      <div className="popup-content">
        <div className="popup-close" onClick={handleClose}>
          {/* Use the AiOutlineCloseCircle icon */}
          <AiOutlineCloseCircle className="close-icon" />
        </div>
        <h2>Subscribe Now</h2>
        <p>Stay updated with our latest news and offers!</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubmit}>Subscribe</button>
      </div>
    </div>
  );
};

export default SubscribePopup;
