// Trusted.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Mobiletrusted.css';
import clientData from '../../../../../data/dataClient';

const MobileTrusted = () => {
  const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: isMobile ? 2 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    centerMode: true,
    centerPadding: isMobile ? '20px' : '50px', // Adjust the padding as needed
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      // ... other breakpoints and settings
    ],
  };

  return (
    <div className={`mobile-client-slider ${isMobile ? 'visible' : 'hidden'}`}>
      <h2>Trusted by 10+ Leading Brands</h2>
      <Slider {...settings}>
        {clientData.map((client) => (
          <div key={client.id}>
            <img src={client.image} alt={client.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MobileTrusted;
