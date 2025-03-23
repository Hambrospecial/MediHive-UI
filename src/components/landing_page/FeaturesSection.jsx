import React from "react";
import "../../styles/FeaturesSection.css";


const features = [
  { id: 1, icon: "🔒", title: "Secure & Private", desc: "Your data is encrypted and safe." },
  { id: 2, icon: "🌍", title: "Seamless Access", desc: "Access records anytime, anywhere." },
  { id: 3, icon: "💊", title: "Prescription Tracking", desc: "Monitor your prescriptions easily." }
];

const FeaturesSection = () => {
  return (
    <section className="features">
      <h2>Why Choose MediHive?</h2>
      <div className="features-container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-box">
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;