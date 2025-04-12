import React from 'react';
import './TestimonialsContent.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah T.',
    feedback: 'ForeFront Landscaping transformed our backyard into a beautiful oasis. Professional, timely, and incredibly creative!',
  },
  {
    id: 2,
    name: 'James R.',
    feedback: 'Their team did an amazing job with our office complex. Clean, organized, and exceeded expectations.',
  },
  {
    id: 3,
    name: 'Alicia M.',
    feedback: 'Highly recommend ForeFront! They listened to our needs and delivered the perfect drought-tolerant landscape.',
  },
];

const TestimonialsContent = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <p className="testimonials-subtitle">Real feedback from real clients who trusted us with their landscapes.</p>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-text">"{testimonial.feedback}"</p>
            <p className="testimonial-name">– {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsContent;