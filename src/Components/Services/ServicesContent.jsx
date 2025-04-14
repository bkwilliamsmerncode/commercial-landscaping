import React from 'react';
import './ServicesContent.css';
import { FaLeaf, FaTree, FaLightbulb, FaSeedling } from 'react-icons/fa';

const ServicesContent = () => {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">We provide professional landscaping solutions to make your outdoor space shine.</p>
      <div className="services-grid">
        <div className="service-card">
          <FaLeaf className="service-icon" />
          <h3>Lawn Care</h3>
          <p>From mowing to fertilizing, we keep your lawn green, healthy, and beautiful.</p>
        </div>
        <div className="service-card">
          <FaTree className="service-icon" />
          <h3>Tree Trimming</h3>
          <p>Expert trimming to keep your trees strong, safe, and looking sharp year-round.</p>
        </div>
        <div className="service-card">
  <FaLightbulb className="service-icon" />
  <h3>Landscape Lighting</h3>
  <p>Elegant outdoor lighting to enhance your yard’s beauty and improve nighttime safety.</p>
</div>
        <div className="service-card">
          <FaSeedling className="service-icon" />
          <h3>Landscape Design</h3>
          <p>Custom landscape designs that elevate curb appeal and turn heads.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesContent