import React from "react";
import "./ContactContent.css";
import FreeEstimate from "../FreeEstimate/FreeEstimate"; // 👈 Make sure the path is correct!

const ContactContent = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a question or want a quote? We’d love to hear from you!
      </p>
      <div className="contact-form-wrapper">
        <FreeEstimate hideHeader={true} />
      </div>
    </section>
  );
};

export default ContactContent;
