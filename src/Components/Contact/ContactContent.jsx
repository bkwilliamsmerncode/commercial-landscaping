import React from "react";
import "./ContactContent.css";
import FreeEstimate from "../FreeEstimate/FreeEstimate"; // 👈 Make sure the path is correct!
import { Helmet } from "react-helmet-async";

const ContactContent = () => {
  return (
    <>
     <Helmet>
        <title>Contact Forefront Landscaping | Tucson, AZ</title>
        <meta name="description" content="Get in touch with Forefront Landscaping for all your landscaping needs in Tucson. Call us or fill out our contact form today." />
        <meta name="keywords" content="contact landscaping Tucson, Forefront Landscaping contact info, landscaping quote Tucson" />
      </Helmet>
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a question or want a quote? We’d love to hear from you!
      </p>
      <div className="contact-form-wrapper">
        <FreeEstimate hideHeader={true} />
      </div>
    </section>
    </>
  );
};

export default ContactContent;
