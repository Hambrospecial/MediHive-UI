import React from "react";
import "../../styles/AboutPage.css";
import { FaUsers, FaShieldAlt, FaHeartbeat, FaPills } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About MediHive</h1>
        <p className="about-description">
          MediHive is a secure and user-friendly platform designed to help you manage your medical records anytime, anywhere. Our mission is to empower individuals to take control of their health by providing seamless access to their medical history across hospitals and pharmacies.
        </p>

        <div className="about-features">
          <h2>Why Choose MediHive?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h3>For Everyone</h3>
              <p>Whether you're a patient, doctor, or pharmacist, MediHive is designed to meet your needs.</p>
            </div>
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <h3>Secure & Private</h3>
              <p>Your data is encrypted and safe with us. We prioritize your privacy and security.</p>
            </div>
            <div className="feature-card">
              <FaHeartbeat className="feature-icon" />
              <h3>Health at Your Fingertips</h3>
              <p>Access your medical records and prescriptions anytime, anywhere.</p>
            </div>
            <div className="feature-card">
              <FaPills className="feature-icon" />
              <h3>Prescription Tracking</h3>
              <p>Easily monitor and manage your prescriptions in one place.</p>
            </div>
          </div>
        </div>

        <div className="about-team">
          <h2>Our Team</h2>
          <p>
            MediHive is built by a passionate team of developers, healthcare professionals, and designers who are dedicated to improving the way you manage your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;