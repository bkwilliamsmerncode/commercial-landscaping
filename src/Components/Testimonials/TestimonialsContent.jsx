import React from 'react';
import './TestimonialsContent.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah T.',
    feedback: 'ForeFront Landscaping transformed our backyard into a beautiful oasis. Professional, timely, and incredibly creative!',
    service: 'Backyard Makeover',
    image: 'https://i.pravatar.cc/150?img=31',
  },
  {
    id: 2,
    name: 'James R.',
    feedback: 'Their team did an amazing job with our office complex. Clean, organized, and exceeded expectations.',
    service: 'Commercial Maintenance',
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 3,
    name: 'Alicia M.',
    feedback: 'Highly recommend ForeFront! They listened to our needs and delivered the perfect drought-tolerant landscape.',
    service: 'Xeriscaping & Planting',
    image: 'https://i.pravatar.cc/150?img=34',
  },
  {
    id: 4,
    name: 'Tom & Linda H.',
    feedback: 'Our front yard looks brand new thanks to the tree trimming, hand weeding, and gravel work. Great team!',
    service: 'Tree Trimming & Gravel',
    image: 'https://i.pravatar.cc/150?img=47',
  },
];

const TestimonialsContent = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <p className="testimonials-subtitle">Real feedback from homeowners and businesses we've helped transform.</p>
      <div className="testimonials-grid">
        {testimonials.map(({ id, name, feedback, service, image }) => (
          <div className="testimonial-card" key={id}>
            <img className="testimonial-img" src={image} alt={`${name}'s profile`} />
            <p className="testimonial-text">"{feedback}"</p>
            <p className="testimonial-name">– {name}</p>
            <p className="testimonial-service">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsContent;