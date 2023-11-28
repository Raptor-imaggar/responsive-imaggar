// ContactPage.js
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './Contact.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';

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
                        <span className="highlight-text">Generative AI-Powered</span> Support to Win Lifelong Customers
                    </h2>

                    <h4>With Haptik, you can:</h4>
                    <ul className='contact-ul-tag'>
                    <li className="list-item">
                            <div className="bullet-point">
                                <AiOutlineCheckCircle className="bullet-icon" />
                            </div>
                            <div className="list-content">
                                <span className="heading">Build a Generative AI Assistant in No Time!</span> <br />
                                <span className="description">Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.</span>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className="bullet-point">
                                <AiOutlineCheckCircle className="bullet-icon" />
                            </div>
                            <div className="list-content">
                                <span className="heading">Drive Better Customer Outcomes with Analytics</span> <br />
                                <span className="description">Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.</span>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className="bullet-point">
                                <AiOutlineCheckCircle className="bullet-icon" />
                            </div>
                            <div className="list-content">
                                <span className="heading">Unlock Agent Efficiency with Agent Co-pilot</span> <br />
                                <span className="description">Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.</span>
                            </div>
                        </li>
                        <li className="list-item">
                            <div className="bullet-point">
                                <AiOutlineCheckCircle className="bullet-icon" />
                            </div>
                            <div className="list-content">
                                <span className="heading">Drive Better Customer Outcomes with Analytics</span> <br />
                                <span className="description">Empower agents with Gen AI-powered chat suggestions, intent detection & other contextual information for effective query resolution.</span>
                            </div>
                        </li>
                        
                    </ul>
                    <div className="logo-row">
                        {/* Add your logo images here */}
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Request a Demo</h2>
                    <form>
                    <div className="form-group">
  <div className="form-row">
    <input className='Nameinput FirstName' placeholder='First Name' type="text" id="firstName" name="firstName" />
    <div className="space-between"></div> {/* Add a spacer between the inputs */}
    <input className='Nameinput LastName' placeholder='Last Name' type="text" id="lastName" name="lastName" />
  </div>
</div>

                        <div className="form-group">
                            <input className='contact-input' placeholder='Company Name' type="text" id="companyName" name="companyName" />
                        </div>
                        <div className="form-group">
                            <input className='contact-input' placeholder='Company Name' type="text" id="companyName" name="companyName" />
                        </div>
                        <div className="form-group">
                            <input className='contact-input' placeholder='Email' type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                            <Select
              className="country-select contact-input"
              options={countryCodes}
              value={selectedCountry}
              onChange={(value) => setSelectedCountry(value)}
              placeholder="Select"
              menuPlacement="auto" // This makes the dropdown open at the top or bottom based on available space
            />
                                <input
                                    className="contact-input phone-input"
                                    placeholder="Phone Number"
                                    type="text"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                />
                            </div>
                        </div>
                        <button className='contact-submit-button' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;