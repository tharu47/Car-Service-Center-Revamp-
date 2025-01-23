import React from 'react';
import './packages.css';
import pc1Image from '../assets/pc1.jpg';
import pc2Image from '../assets/pc2.jpg';
import pc3Image from '../assets/pc3.jpg';

function Packages() {
  return (
    <div className="package-box">
      <div className="section">
        <div className="title">
          <h1><hr className="line" /> Our Packages <hr className="line" /></h1>
        </div>
        <div className="services">

          <div className="card">
            <img src={pc1Image} width="300" height="200" alt="Prime Essentials Package" />
            <h2>Prime Essentials Package</h2>
            <p>
              The Prime Essentials Package is perfect for those seeking fundamental care for their vehicles. This package includes a
              meticulous exterior wash, interior cleaning, and a thorough inspection of essential components.
              From tire care to fluid level checks, the Prime Essentials Package ensures your car is in prime condition for everyday drives.
              It's the ideal choice for those who want a quick refresh and basic maintenance to keep their vehicle running smoothly.
            </p>
            <a href="#" className="button">Read More</a>
          </div>

          <div className="card">
            <img src={pc2Image} width="300" height="200" alt="Performance Plus Package" />
            <h2>Performance Plus Package</h2>
            <p>
              For enthusiasts who demand peak performance from their vehicles, the Performance Plus Package is a
              comprehensive solution. This package includes our signature Engine Tune-Up service, wheel alignment, and brake system inspection.
              We delve into the intricacies of your vehicle's performance, fine-tuning the engine and optimizing critical components to enhance
              overall driving dynamics. Elevate your driving experience with the Performance Plus Package at Prime Plus Auto.
            </p>
            <a href="#" className="button">Read More</a>
          </div>

          <div className="card">
            <img src={pc3Image} width="300" height="200" alt="Luxury Care Package" />
            <h2>Luxury Care Package</h2>
            <p>
              Indulge your vehicle in the epitome of care with our Luxury Care Package. Tailored for premium and luxury cars,
              this package includes a deluxe exterior detailing, leather treatment, and a full diagnostics scan. Our expert technicians
              pay meticulous attention to every detail, ensuring your high-end vehicle receives the pampering it deserves. Experience the
              luxury of a well-maintained and polished automobile with the exclusive services offered in the Luxury Care Package.
            </p>
            <a href="#" className="button">Read More</a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Packages;
