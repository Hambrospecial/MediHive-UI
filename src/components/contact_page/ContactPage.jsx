import React from "react";
import "../../styles/ContactPage.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-description">
          Have questions or need assistance? We're here to help! Reach out to us using the form below or through our contact information.
        </p>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>123 MediHive Street, Health City, HC 12345</p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>+1 (123) 456-7890</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p>support@medihive.com</p>
            </div>
          </div>
        </div>

        {/* Optional: Embed a Map */}
        <div className="contact-map">
          <h2>Our Location</h2>
          <iframe
            title="MediHive Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2d2b2a1b3c5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633023226789!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;