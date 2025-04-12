import React from 'react';
import './FreeEstimate.css';

const FreeEstimate = () => {
  return (
    <section className="estimate-section">
      <div className="estimate-container">
        <h2 className="estimate-title">Get a Free Estimate</h2>
        <p className="estimate-subtitle">Let us bring your landscaping vision to life. Fill out the form and we’ll get back to you within 24 hours!</p>
        
        <form className="estimate-form">
          <div className="estimate-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="phone" placeholder="Phone Number" required />
          <textarea name="projectDetails" placeholder="Tell us about your project..." rows="5" required></textarea>
          <button type="submit">Request Estimate</button>
        </form>
      </div>
    </section>
  );
};

export default FreeEstimate;