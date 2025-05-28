import React from 'react';
import './TestimonialsContent.css';
import { Helmet } from "react-helmet-async";

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
  {
    id: 5,
    name: 'Brandon C.',
    feedback: 'We needed a complete redesign for our rental property’s front yard. The crew was efficient, friendly, and the results were stunning!',
    service: 'Front Yard Redesign',
    image: 'https://i.pravatar.cc/150?img=56',
  },
  {
    id: 6,
    name: 'Elena G.',
    feedback: 'From the first consultation to the final walk-through, ForeFront was top-notch. The paver patio they installed is now the highlight of our home.',
    service: 'Custom Hardscaping',
    image: 'https://i.pravatar.cc/150?img=65',
  },
];

const TestimonialsContent = () => {
  return (
    <>
     <Helmet>
        <title>Customer Testimonials | Forefront Landscaping Tucson</title>
        <meta name="description" content="Read reviews and testimonials from our happy customers about Forefront Landscaping in Tucson." />
        <meta name="keywords" content="landscaping reviews, customer testimonials Tucson, Forefront Landscaping reviews" />
      </Helmet>
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
    </>
  );
};

export default TestimonialsContent;