import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ForeFront Landscaping</h2>
          <p className="footer-slogan">"Landscaping Done Right!"</p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Tucson, AZ 85741</p>
          <p><FaPhone /> (520) 800-6139</p>
          <p><FaEnvelope /> forefrontlandscapingllc@gmail.com</p>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ForeFront Landscaping. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;