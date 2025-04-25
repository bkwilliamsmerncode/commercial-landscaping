import React from 'react';
import './ChooseUs.css';

const ChooseUs = () => {
  const reasons = [
    {
      icon: '🌿',
      title: 'Expertise',
      description: 'Over 10 years of experience in commercial landscaping.',
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Committed to delivering top-notch landscaping services.',
    },
    {
      icon: '🤝',
      title: 'Customer Satisfaction',
      description: 'Our clients’ happiness is our top priority.',
    },
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Forefront Landscaping?</h2>
      <div className="reasons">
        {reasons.map((reason, index) => (
          <div className="reason" key={index}>
            <div className="icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;