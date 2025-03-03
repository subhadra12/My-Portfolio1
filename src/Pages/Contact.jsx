import React, { useState } from 'react';
import mail_icon from '../assets/mail_icon.svg';
import call_icon from '../assets/call_icon.svg';
import location_icon from '../assets/location_icon.svg';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = formData;
    
    const data = {
      access_key: '7f0c7e27-d750-4db6-9c85-ff5201c4012a',
      name,
      email,
      message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (result.success) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Something went wrong, please try again.');
      }
    } catch (error) {
      setResponseMessage('Error occurred, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="contact" id="contact">
        <div className="title text-center">
          <h1>Get in touch</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="con text-center">
              <h2>Let's talk</h2>
              <p>
                I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact me anytime.
              </p>
            </div>
            <div className="contact-details">
              <div className="contact-detail d-flex">
                <img src={mail_icon} alt="Mail" />
                <p>dahalsubhadra2001@gmail.com</p>
              </div>
              <div className="contact-detail d-flex">
                <img src={call_icon} alt="Call" />
                <p>9863443310</p>
              </div>
              <div className="contact-detail d-flex">
                <img src={location_icon} alt="Location" />
                <p>Mulpani, Kathmandu</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <form onSubmit={onSubmit} className="form">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">Write your message here</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                className="contact-submit"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Now'}
              </button>
              {responseMessage && <p className="response-message">{responseMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
