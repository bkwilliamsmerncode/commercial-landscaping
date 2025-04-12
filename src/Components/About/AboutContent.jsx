import React from "react";
import "./AboutContent.css";
import crew from '../../Assets/crew.jpg'; 

const AboutContent = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-text">
          <h2>About ForeFront Landscaping</h2>
          <p className="tagline">"Landscaping Done Right!"</p>
          <p>
            At ForeFront Landscaping, we don’t just cut grass — we craft outdoor experiences. With years of commercial and residential landscaping expertise, our mission is to transform ordinary spaces into lush, vibrant landscapes. Our dedicated team is passionate, professional, and always puts the customer first. Whether it’s lawn care, hardscaping, or full property makeovers, we bring your vision to life with precision and pride.
          </p>
        </div>
        <div className="about-img">
          <img src={crew} alt="ForeFront Landscaping Team" />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;




