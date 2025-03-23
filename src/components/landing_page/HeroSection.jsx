import React from "react";
import "../../styles/HeroSection.css";
import heroImage from "../../assets/mediHiveHeroImage.webp";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/signup");
  };
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Your Medical Records, Anywhere, Anytime</h1>
        <p>Securely access and manage your medical history across hospitals & pharmacies.</p>
        <button className="cta-btn" onClick={handleGetStartedClick}>Get Started</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="MediHive Illustration" />
      </div>
    </section>
  );
};

export default HeroSection;