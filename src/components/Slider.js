import React, { useState, useEffect } from 'react';
import Slide1 from '../assets/Slide1.jpg';
import Slide2 from '../assets/Slide2.jpg';
import Slide3 from '../assets/Slide3.jpg';
import Slide4 from '../assets/Slide4.jpg';

const Slider = () => {
  const slides = [Slide1, Slide2, Slide3, Slide4]; // Array of slides
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Wrap around to last slide if it's the first one
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // Wrap around to first slide if it's the last one
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Change the slide every 5 seconds
    }, 3000); // 5000 ms = 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
        <button className="prev" onClick={prevSlide}>❮</button>
        <button className="next" onClick={nextSlide}>❯</button>
      </div>
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
