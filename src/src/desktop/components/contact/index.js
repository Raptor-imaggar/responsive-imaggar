// ContactPage.js
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Contact.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { contactData } from '../../../../data/dataContact';

const ContactPage = () => {
  const [countryCodes, setCountryCodes] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }

        const data = await response.json();
        const countryData = data.map((country) => ({
          label: `+${country.callingCodes[0]} (${country.name})`,
          value: `+${country.callingCodes[0]}`,
        }));

        setCountryCodes(countryData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="contact-main">
      <div className="contact-container">
        <div className="contact-content">
          <h2>
            <span className="highlight-text">{contactData.mainTitle}</span>
          </h2>

          <h4>{contactData.subheading}</h4>
          <ul className="contact-ul-tag">
            {contactData.listItems.map((item, index) => (
              <li key={index} className="list-item">
                <div className="bullet-point">
                  <AiOutlineCheckCircle className="bullet-icon" />
                </div>
                <div className="list-content">
                  <span className="heading">{item.heading}</span> <br />
                  <span className="description">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="logo-row">{/* Add your logo images here */}</div>
        </div>
        <div className="contact-form">
          <h2>{contactData.demoRequestTitle}</h2>
          <form>
            <div className="form-group">
              <div className="form-row">
                <input
                  className="Nameinput FirstName"
                  placeholder={contactData.formLabels.firstName}
                  type="text"
                  id="firstName"
                  name="firstName"
                />
                <div className="space-between"></div>
                <input
                  className="Nameinput LastName"
                  placeholder={contactData.formLabels.lastName}
                  type="text"
                  id="lastName"
                  name="lastName"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                placeholder={contactData.formLabels.companyName}
                type="text"
                id="companyName"
                name="companyName"
              />
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                placeholder={contactData.formLabels.companyName}
                type="text"
                id="companyName"
                name="companyName"
              />
            </div>
            <div className="form-group">
              <input
                className="contact-input"
                placeholder={contactData.formLabels.email}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <div className="form-row">
                <Select
                  className="country-select contact-input"
                  options={countryCodes}
                  value={selectedCountry}
                  onChange={(value) => setSelectedCountry(value)}
                  placeholder={contactData.formLabels.selectPlaceholder}
                  menuPlacement="auto"
                />
                <input
                  className="contact-input phone-input"
                  placeholder={contactData.formLabels.phoneNumber}
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                />
              </div>
            </div>
            <button className="contact-submit-button" type="submit">
              {contactData.formLabels.submitButton}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
