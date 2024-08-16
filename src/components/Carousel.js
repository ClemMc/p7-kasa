import React, { useState } from 'react';
import '../styles/carousel.scss';
import arrow_right from '../assets/arrow_right.svg';
import arrow_left from '../assets/arrow_left.svg';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${-currentIndex * 100}%)` }}
          />
        ))}
      </div>
      {pictures.length > 1 && (
      <div className="carouselButton">
        <button className="carouselArrow prev" onClick={handlePrevClick}>
          <img src={arrow_left} alt="Previous arrow" />
        </button>
        
        <button className="carouselArrow next" onClick={handleNextClick}>
          <img src={arrow_right} alt="Next arrow" />
        </button>
      </div>
      )}
      {pictures.length > 1 && (
      <div className="carousel-indicator">
        {currentIndex + 1}/{pictures.length}
      </div>
      )}
    </div>
  );
};

export default Carousel;
