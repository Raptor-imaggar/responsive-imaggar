import React, { useState, useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './SubscribePopup.css'; // You can create a CSS file for styling
import Poster from './poster.png';

const SubscribePopup = () => {
  const [email, setEmail] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    // Display the popup after 5 seconds
    const timeoutId = setTimeout(() => {
      setPopupVisible(true);
    }, 5000);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Implement your subscription logic here
    console.log('Subscribed with email:', email);
    // Hide the popup after successful submission
    setPopupVisible(false);
  };

  const handleClose = () => {
    // Close the popup when the close icon is clicked
    setPopupVisible(false);
  };

  return isPopupVisible ? (
    <div className="popup-subscribe-main">
      <div className="popup-image-div">
        {/* Use the Poster image within the div */}
        <img src={Poster} alt="Logo" />
      </div>
      <div className="popup-content">
        <div className="popup-close" onClick={handleClose}>
          {/* Use the AiOutlineCloseCircle icon */}
          <AiOutlineCloseCircle />
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
  ) : null;
};

export default SubscribePopup;
