import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageCarousel.css';

import img1 from '../../Assets/img1.JPG';
import img2 from '../../Assets/img2.JPG';
import img3 from '../../Assets/img3.JPG';
import img4 from '../../Assets/img4.JPG';
import img5 from '../../Assets/img5.JPG';
// ... import more as needed

const images = [img1, img2, img3, img4, img5 /* ... */];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(window.innerWidth >= 768 ? 3 : 1);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % (images.length - slidesToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length - slidesToShow : prev - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const visibleImages = images.slice(currentIndex, currentIndex + slidesToShow);

  return (
    <div className="carousel-container" {...swipeHandlers}>
      <button className="nav-button left" onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className="carousel-track">
        {visibleImages.map((img, i) => (
          <div className="carousel-slide" key={i}>
            <img src={img} alt={`Slide ${i}`} className="carousel-image" />
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageCarousel;