import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., send the data to an API or email).
    alert('Message Sent!');
    // Optionally reset form after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="cnt-container">
      <div className="content">
        <div className="left-side">

          <div className="address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic">Address</div>
            <div className="text-one">No:11, 12 street, </div>
            <div className="text-two">Maradana, Colombo</div>
          </div>

          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+94 34 568 3056</div>
            <div className="text-two">+94 37 426 7683</div>
          </div>

          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">info@ppauto.lk</div>
            <div className="text-two">primepulseauto@gmail.com</div>
          </div>

        </div>

        <div className="right-side">
          <div className="topic-text">Send Your Message</div>
          <p className="para">
            Have questions about our services or need assistance? <br />
            Leave us a message down below... <br />
            And our team at Prime Pulse Auto will be happy to help you with anything you need.<br />
            We're here to ensure your vehicle gets the care it deserves!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box message-box">
              <textarea
                placeholder="Type Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="buttonx">
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
