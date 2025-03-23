import React from "react";
import "../../styles/NavigationBar.css";
import logoIcon from "../../assets/medihiveLogo.webp";
import { FaUser, FaInfoCircle, FaEnvelope, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logoIcon} alt="MediHive Logo" className="logo-icon" /> MediHive
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/#features">
            <FaInfoCircle className="nav-icon" /> Features
          </Link>
        </li>
        <li>
          <Link to="/#about">
            <FaUser className="nav-icon" /> About
          </Link>
        </li>
        <li>
          <Link to="/#contact">
            <FaEnvelope className="nav-icon" /> Contact
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt className="nav-icon" /> Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;