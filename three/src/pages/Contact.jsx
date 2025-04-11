import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="container">
      <h2 className="section-title text-center">Get In Touch</h2>
      
      <div className="row">
        <div className="col-lg-5 mb-4">
          <div className="neumorphic-card h-100">
            <h3 className="text-primary mb-4">Contact Information</h3>
            
            <div className="d-flex align-items-center mb-4">
              <div className="neumorphic-button me-3">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h5 className="mb-1">Location</h5>
                <p className="mb-0">Bangkok, Thailand</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center mb-4">
              <div className="neumorphic-button me-3">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h5 className="mb-1">Email</h5>
                <p className="mb-0">your.email@example.com</p>
              </div>
            </div>
            
            <div className="d-flex align-items-center mb-4">
              <div className="neumorphic-button me-3">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h5 className="mb-1">Phone</h5>
                <p className="mb-0">+66 123 456 789</p>
              </div>
            </div>
            
            <div className="social-links mt-4">
              <h5 className="mb-3">Find Me On</h5>
              <div className="d-flex gap-2">
                <a href="#" className="neumorphic-button">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="neumorphic-button">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="neumorphic-button">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="neumorphic-button">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-7">
          <div className="neumorphic-card">
            <h3 className="text-primary mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control neumorphic-inset"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control neumorphic-inset"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control neumorphic-inset"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  className="form-control neumorphic-inset"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="neumorphic-button px-4 py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;