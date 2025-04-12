import React from 'react';
import './ContactContent.css';

const ContactContent = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">Have a question or want a quote? We’d love to hear from you!</p>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactContent;