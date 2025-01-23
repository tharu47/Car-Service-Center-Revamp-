import React from 'react';
import './services.css';
import paintImage from '../assets/paint.png'; // Adjust path as needed
import tireImage from '../assets/tire.png';  // Adjust path as needed
import batteryImage from '../assets/batary.png'; // Adjust path as needed
import mechImage from '../assets/mech2.png'; // Adjust path as needed
import engineImage from '../assets/engine.png'; // Adjust path as needed
import partImage from '../assets/mech.png'; // Adjust path as needed
import towImage from '../assets/tow.png'; // Adjust path as needed
import windscreenImage from '../assets/windscreen.png'; // Adjust path as needed
import rainsImage from '../assets/rains.png'; // Adjust path as needed
import polishImage from '../assets/polish.png'; // Adjust path as needed

function Services() {
  return (
    <div className="ser-container">
      <h1 className="heading">Our Services</h1>

      <div className="box-container">
        <div className="box">
          <img className="boximg" src={paintImage} alt="Full Paint" />
          <h3>Full Paint</h3>
          <p>
            We offer a high-quality, durable finish in a range of colors, ensuring your car looks as good as new. Our team uses advanced techniques to provide a smooth, glossy, and long-lasting coat, protecting your vehicle from wear and tear.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={tireImage} alt="Tire Replacement" />
          <h3>Tire Replacement</h3>
          <p>
            Ensure your safety on the road with our professional tire replacement services. We offer a wide selection of high-quality tires suited to your vehicle’s needs. Our expert team will quickly and efficiently replace your tires, ensuring optimal performance and durability.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={batteryImage} alt="Battery Service" />
          <h3>Battery Service</h3>
          <p>
            Keep your vehicle running smoothly with our reliable battery service. We provide battery testing, replacement, and installation to ensure your car starts every time. Trust our expert technicians to find the right battery for your vehicle’s needs.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={mechImage} alt="Spare Parts Replacements" />
          <h3>Spare Parts Replacements</h3>
          <p>
            Ensure your car runs like new with our spare parts replacement service. We offer high-quality parts, providing reliable long-lasting solutions. Our skilled technicians perform precise replacements to keep your vehicle in top condition.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={engineImage} alt="Engine Tune Ups" />
          <h3>Engine Tune Ups</h3>
          <p>
            Maximize your car's performance with our engine tune-up service. We inspect, clean, and adjust key engine components to ensure smooth operation. Trust our experts to keep your engine running at its best.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={partImage} alt="Part Replacements" />
          <h3>Part Replacements</h3>
          <p>
            Ensure your vehicle stays in top condition with our part replacement service. From worn-out brakes to faulty filters, we replace essential components with high-quality parts to maintain safety and performance.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={towImage} alt="Undercarriage Degreasing" />
          <h3>Undercarriage Degreasing</h3>
          <p>
            Keep your vehicle's undercarriage spotless and protected with our degreasing service. We thoroughly remove dirt, grease, and grime to prevent corrosion and ensure optimal performance.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={windscreenImage} alt="Windscreen Treatments" />
          <h3>Windscreen Treatments</h3>
          <p>
            Enhance visibility and safety with our professional windscreen treatments. We apply advanced solutions to repel water, reduce glare, and prevent smudges, ensuring a crystal-clear view in all conditions.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={rainsImage} alt="Wash & Grooming" />
          <h3>Wash & Grooming</h3>
          <p>
            Give your vehicle the care it deserves with our premium wash and grooming service. We clean, polish, and detail every inch of your car, inside and out, leaving it spotless and shiny. Drive away in a car that feels brand new!
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={tireImage} alt="Wheel Alignment" />
          <h3>Wheel Alignment</h3>
          <p>
            Ensure a smooth and safe ride with our precise wheel alignment service. We adjust your wheels to the optimal angle, improving handling, reducing tire wear, and enhancing fuel efficiency. Keep your drive straight and steady.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={partImage} alt="Part Replacement" />
          <h3>Part Replacement</h3>
          <p>
            Restore your vehicle's reliability with our expert part replacement service. We replace worn or damaged components with high-quality parts to ensure safety and performance. Trust our professionals to keep your car running at its best.
          </p>
          <a href="#" className="btn">Read more</a>
        </div>

        <div className="box">
          <img className="boximg" src={polishImage} alt="Waxing" />
          <h3>Waxing</h3>
          <p>
            Protect and enhance your car's shine with our professional waxing service. We apply high-quality wax coating to shield your vehicle's paint from scratches, leaving it with a long-lasting finish. Keep your car looking brand new!
          </p>
          <a href="#" className="btn">Read more</a>
        </div>
      </div>
    </div>
  );
}

export default Services;
