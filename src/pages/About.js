import React from 'react';
import carImage from '../assets/Car.png'; // Adjust the path based on your folder structure
import './aboutus.css';

function AboutUs() {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Cars, Perfected</h1>
          <h3>Experience the Difference!</h3>
          <p>
            Experience the Future of Car Buying with Prime Pulse Auto. At Prime Pulse Auto, we redefine the car buying experience by offering personalized, seamless, and stress-free service. 
            From finding the perfect vehicle to securing the best deal, we are committed to making your journey with us exceptional. 
            Discover a wide range of quality cars, trusted advice, and a hassle-free process that puts you first.
            <br />
            <br />
            <b>Drive with confidence, choose Prime Pulse Auto.</b>
          </p>
          <a href="/services" className="btny">Our Services</a>
        </div>

        <div className="home-img">
          <div className="rhombus">
            <img src={carImage} alt="Car" />
          </div>
        </div>

        <div className="rhombus2"></div>
      </section>
    </div>
  );
}

export default AboutUs;