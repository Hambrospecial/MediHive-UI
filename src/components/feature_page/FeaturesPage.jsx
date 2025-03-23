import React from "react";
import "../../styles/FeaturesPage.css";
import { FaShieldAlt, FaHeartbeat, FaPills, FaGlobe, FaUserLock, FaChartLine } from "react-icons/fa";

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <div className="features-container">
        <h1>Features</h1>
        <p className="features-description">
          Discover the powerful features of MediHive that make managing your medical records easier, safer, and more efficient.
        </p>

        <div className="features-grid">
          {/* Feature 1: Secure & Private */}
          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Secure & Private</h3>
            <p>Your data is encrypted and safe with us. We prioritize your privacy and security.</p>
          </div>

          {/* Feature 2: Seamless Access */}
          <div className="feature-card">
            <FaGlobe className="feature-icon" />
            <h3>Seamless Access</h3>
            <p>Access your medical records anytime, anywhere, across hospitals and pharmacies.</p>
          </div>

          {/* Feature 3: Prescription Tracking */}
          <div className="feature-card">
            <FaPills className="feature-icon" />
            <h3>Prescription Tracking</h3>
            <p>Easily monitor and manage your prescriptions in one place.</p>
          </div>

          {/* Feature 4: Health Insights */}
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Health Insights</h3>
            <p>Get personalized health insights and recommendations based on your medical history.</p>
          </div>

          {/* Feature 5: Emergency Access */}
          <div className="feature-card">
            <FaHeartbeat className="feature-icon" />
            <h3>Emergency Access</h3>
            <p>Grant emergency access to your medical records to trusted healthcare providers.</p>
          </div>

          {/* Feature 6: User-Friendly */}
          <div className="feature-card">
            <FaUserLock className="feature-icon" />
            <h3>User-Friendly</h3>
            <p>Our intuitive interface makes it easy for everyone to use, regardless of tech skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;