import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './testimonial.css';
import testimonialData from '../../../../../data/testimonialData';

const Testimonial = ({ logo, content, personPic, personName, personPosition, customColor }) => {
  const testimonialStyle = {
    backgroundColor: customColor,
  };

  return (
    <div className="testimonial" style={testimonialStyle}>
      <div className="testimonial-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="testimonial-content">
        {content}
      </div>
      <hr className="testimonial-line" />
      <div className="testimonial-person">
        <div className="person-info">
          <img src={personPic} alt="Person Pic" className="person-pic" />
          <div className="person-details">
            <p className="person-name">{personName}</p>
            <p className="person-position">{personPosition}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='testimonials-container '>
      <div className='testimonial-title'>
        <h1>Testimonials Here</h1>
        <h6>How our Clients Felt!</h6>
      </div>

      <Slider {...settings} dots={true}>
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
