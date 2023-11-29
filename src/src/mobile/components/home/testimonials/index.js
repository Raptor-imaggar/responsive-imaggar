// Updated Testimonial component

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './testimonial.css';
import './testimonial-mobile.css'; // Import mobile styles
import testimonialData from '../../../../../data/testimonialData';

const Testimonial = ({ logo, content, personPic, personName, personPosition, customColor }) => {
  const testimonialStyle = {
    backgroundColor: customColor,
  };

  return (
    <div className="mobile-testimonial" style={testimonialStyle}>
      <div className="mobile-testimonial-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="mobile-testimonial-content">
        {content}
      </div>
      <hr className="mobile-testimonial-line" />
      <div className="mobile-testimonial-person">
        <div className="mobile-person-info">
          <img src={personPic} alt="Person Pic" className="mobile-person-pic" />
          <div className="mobile-person-details">
            <p className="mobile-person-name">{personName}</p>
            <p className="mobile-person-position">{personPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 testimonial on mobile screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide navigation arrows
  };

  return (
    <div className='mobile-testimonials-container '>
      <div className='mobile-testimonial-title'>
        <h1>Testimonials Here</h1>
        <h6>How our Clients Felt !</h6>
      </div>

      <Slider {...settings}>
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
