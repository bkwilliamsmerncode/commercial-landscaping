import React, { useRef, useState } from "react";
import "./FreeEstimate.css";
import emailjs from "@emailjs/browser";

const FreeEstimate = ({ hideHeader = false }) => {
  const form = useRef();
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pizxskl",
        "template_yyozoto",
        form.current,
        "KWy6n3TCuG2NTxqOE"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="estimate-section">
      <div className="estimate-container">
        {!hideHeader && (
          <>
            <h2 className="estimate-title">Get a Free Estimate</h2>
            <p className="estimate-subtitle">
              Let us bring your landscaping vision to life. Fill out the form
              and we’ll get back to you within 24 hours!
            </p>
          </>
        )}
        <form className="estimate-form" ref={form} onSubmit={sendEmail}>
          <div className="estimate-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleInput}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleInput}
            />
          </div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            onChange={handleInput}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleInput}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            onChange={handleInput}
          />
          <textarea
            name="projectDetails"
            placeholder="Tell us about your project..."
            rows="5"
            required
            onChange={handleInput}
          ></textarea>
          <button type="submit">Request Estimate</button>
        </form>
      </div>
    </section>
  );
};

export default FreeEstimate;
