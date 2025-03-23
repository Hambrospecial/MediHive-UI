import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CallToAction.css";

const CallToAction = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <section className="cta">
      <h2>Join MediHive Today</h2>
      <p>Sign up and take control of your medical history securely.</p>
      <button className="signup-btn" onClick={handleSignUpClick}>
        Sign Up Now
      </button>
    </section>
  );
};

export default CallToAction;