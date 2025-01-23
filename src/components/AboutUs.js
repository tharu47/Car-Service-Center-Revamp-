import React from 'react';
import SlideImage from '../assets/Slide3.jpg';

function AboutUs() {
  return (
    <div>
      <div className="heading">
        <h1>
          <hr className="line" /> About Us <hr className="line" />
        </h1>
      </div>
      <div className="wrapper">
        <div className="content">
          <h2>Outstanding Solution For Your Needs</h2>
          <p>
            Welcome to Prime Pulse Auto, where the heartbeat of automotive excellence resonates. 
            We are not just a platform; we are a passion-driven community dedicated to delivering 
            unparalleled experiences in the world of automobiles. Explore with us as we redefine 
            your journey on the road, blending innovation, quality, and a commitment to exceed expectations.
          </p>
          <a href="about.html" className="btnx">Read More</a>
        </div>
        <div className="image">
          <img src={SlideImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
