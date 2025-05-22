import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../../Assets/img1.JPG';
import img2 from '../../Assets/img2.JPG';
import img3 from '../../Assets/img3.JPG';
import img4 from '../../Assets/img4.JPG';
import img5 from '../../Assets/img5.JPG';
import img6 from '../../Assets/img6.JPG';
import img7 from '../../Assets/img7.JPG';
import img8 from '../../Assets/img8.JPG';
import img9 from '../../Assets/img9.JPG';
import img10 from '../../Assets/img10.JPG';
import img11 from '../../Assets/img11.JPG';
import img12 from '../../Assets/img12.JPG';
import img13 from '../../Assets/img13.JPG';
import img14 from '../../Assets/img14.JPG';
import img15 from '../../Assets/img15.JPG';
import img16 from '../../Assets/img16.JPG';
import img17 from '../../Assets/img17.JPG';
import img18 from '../../Assets/img18.JPG';
import img19 from '../../Assets/img19.JPG';
import img20 from '../../Assets/img20.JPG';
import './ImageCarousel.css';

const images = [
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20
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