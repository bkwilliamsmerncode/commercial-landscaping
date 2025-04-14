import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageCarousel.css'; // We'll create this file
import img1 from '../../Assets/img1.JPG';
import img2 from '../../Assets/img2.JPG';
import img3 from '../../Assets/img3.JPG'; // Import your images here

const images = [
    img1,
    img2,
    img3,
  // Add more image paths here
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;