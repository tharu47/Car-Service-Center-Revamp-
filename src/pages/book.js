import React, { useState } from 'react';
import './book.css'; // Ensure you import the CSS file

function BookPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nic: '',
    contact: '',
    email: '',
    address: '',
    vehicleBrand: '',
    vehicleModel: '',
    licensePlate: '',
    date: '',
    time: '',
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'contact' && !/^\d*$/.test(value)) return; // Allow only numbers for contact

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Confirmed!');
    console.log(formData);

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      nic: '',
      contact: '',
      email: '',
      address: '',
      vehicleBrand: '',
      vehicleModel: '',
      licensePlate: '',
      date: '',
      time: '',
      services: [],
    });
  };

  const servicesList = [
    'Wash & Grooming',
    'Battery Service',
    'Engine Tune-Ups',
    'Wheel Alignment',
    'Collision Repairs & Painting',
    'Spare Parts Replacement',
    'Hybrid Services',
    'Tire Replacement',
    'Windscreen Treatment',
    'Waxing',
    'Part Replacement',
    'Undercarriage Degreasing',
  ];

  return (
    <div className="formbox">
      <h1 className="formheading">
        <hr className="line" />
        Reservation to Our Service
        <hr className="line" />
      </h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nic">NIC:</label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Vehicle Information */}
        <div className="form-group">
          <label htmlFor="vehicleBrand">Vehicle Brand:</label>
          <input
            type="text"
            id="vehicleBrand"
            name="vehicleBrand"
            value={formData.vehicleBrand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleModel">Vehicle Model:</label>
          <input
            type="text"
            id="vehicleModel"
            name="vehicleModel"
            value={formData.vehicleModel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="licensePlate">Vehicle License Plate:</label>
          <input
            type="text"
            id="licensePlate"
            name="licensePlate"
            value={formData.licensePlate}
            onChange={handleChange}
            required
          />
        </div>

        {/* Service Selection */}
        <div className="form-group">
          <label>Select Services:</label>
          <div className="table-services">
            {servicesList.map((service, index) => (
              <React.Fragment key={service}>
                {index % 3 === 0 && index !== 0 && <div className="row-divider"></div>}
                <div className="service-item">
                  <input
                    type="checkbox"
                    id={service.replace(/\s+/g, '')}
                    name="services"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                  />
                  <label htmlFor={service.replace(/\s+/g, '')}>{service}</label>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center' }}>
          <div className="form-group">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookPage;
