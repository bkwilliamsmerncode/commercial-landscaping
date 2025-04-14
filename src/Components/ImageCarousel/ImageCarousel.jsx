import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../../Assets/img1.JPG';
import img2 from '../../Assets/img2.JPG';
import img3 from '../../Assets/img3.JPG';
import img4 from '../../Assets/img4.JPG';
import img5 from '../../Assets/img5.JPG';
import img6 from '../../Assets/img6.JPG';
import './ImageCarousel.css';

const images = [
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    // Add more images as needed
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  function getSlidesToShow() {
    return window.innerWidth >= 768 ? 3 : 1;
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + slidesToShow >= images.length ? 0 : prev + slidesToShow
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - slidesToShow < 0 ? images.length - slidesToShow : prev - slidesToShow
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className="carousel">
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <div className="carousel-track">
        {visibleImages.map((img, i) => (
          <img key={i} src={img} alt={`carousel ${i}`} className="carousel-image" />
        ))}
      </div>
      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;