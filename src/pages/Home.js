import React from 'react';
import Slider from '../components/Slider';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <div className="home-page">
      {/* Slider Section */}
      <Slider />

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default Home;
