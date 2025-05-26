import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ImageCarousel.css";

import img1 from "../../Assets/img1.jpeg";
import img2 from "../../Assets/img2.jpeg";
import img3 from "../../Assets/img3.jpeg";
import img4 from "../../Assets/img4.jpeg";
import img5 from "../../Assets/img5.jpeg";
import img6 from "../../Assets/img6.jpeg";
import img7 from "../../Assets/img7.jpeg";
import img8 from "../../Assets/img8.jpeg";
import img9 from "../../Assets/img9.jpeg";
import img10 from "../../Assets/img10.jpeg";
import img11 from "../../Assets/img11.jpeg";
import img12 from "../../Assets/img12.jpeg";
import img13 from "../../Assets/img13.jpeg";
import img14 from "../../Assets/img14.jpeg";
import img15 from "../../Assets/img15.jpeg";
// ... import more as needed

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth >= 768 ? 3 : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (images.length - slidesToShow + 1));
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
