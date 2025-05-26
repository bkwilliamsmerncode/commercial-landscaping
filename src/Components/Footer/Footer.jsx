import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-section">
          <h2 className="footer-logo">ForeFront Landscaping</h2>
          <p className="footer-slogan">"Bringing Your Landscaping Ideas To Life"</p>
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
            <a href="https://www.facebook.com/profile.php?id=61576638599840" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/forefront_landscaping_llc/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/forefront-landscaping-llc/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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