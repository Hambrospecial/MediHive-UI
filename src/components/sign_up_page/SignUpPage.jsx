import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GeneralInfo from "./GeneralInfo";
import PatientInfo from "./PatientInfo";
import DoctorInfo from "./DoctorInfo";
import PharmacistInfo from "./PharmacistInfo";
import "../../styles/SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    username: "",
    email: "",
    phoneNumber: "",
    role: "",
    dateOfBirth: "",
    gender: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    licenseNumber: "",
    specialization: "",
    hospitalName: "",
    hospitalAddress: "",
    pharmacyName: "",
    pharmacyAddress: "",
    bloodGroup: "",
    genotype: "",
    allergies: "",
    preExistingConditions: "",
    currentMedications: "",
    consentToShareData: false,
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Multi-step form state
  const [step, setStep] = useState(1);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle next step
  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  // Handle previous step
  const handlePrevious = () => {
    setStep(step - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      // TODO: Send formData to the backend API
      navigate("/login");
    }
  };

  // Validate current step
  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required.";
      if (!formData.lastName) newErrors.lastName = "Last name is required.";
      if (!formData.email) newErrors.email = "Email is required.";
      if (!formData.username) newErrors.username = "Username is required.";
      if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required.";
      if (!formData.role) newErrors.role = "Role is required.";
    }

    if (step === 2 && formData.role === "patient") {
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required.";
      if (!formData.gender) newErrors.gender = "Gender is required.";
      if (!formData.emergencyContactName) newErrors.emergencyContactName = "Emergency contact name is required.";
      if (!formData.emergencyContactPhone) newErrors.emergencyContactPhone = "Emergency contact phone is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate entire form
  const validateForm = () => {
    return validateStep();
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Step 1: General Information */}
          {step === 1 && (
            <GeneralInfo formData={formData} handleChange={handleChange} errors={errors} />
          )}

          {/* Step 2: Role-Specific Information */}
          {step === 2 && formData.role === "patient" && (
            <PatientInfo formData={formData} handleChange={handleChange} errors={errors} />
          )}

          {/* Step 2: Role-Specific Information */}
          {step === 2 && formData.role === "doctor" && (
            <DoctorInfo formData={formData} handleChange={handleChange} errors={errors} />
          )}

          {/* Step 2: Role-Specific Information */}
          {step === 2 && formData.role === "pharmacist" && (
            <PharmacistInfo formData={formData} handleChange={handleChange} errors={errors} />
          )}

          {/* Navigation Buttons */}
          <div className="form-navigation">
            {step > 1 && (
              <button type="button" className="nav-btn" onClick={handlePrevious}>
                Previous
              </button>
            )}
            {step < 2 && (
              <button type="button" className="nav-btn" onClick={handleNext}>
                Next
              </button>
            )}
            {step === 2 && (
              <button type="submit" className="nav-btn">
                Submit
              </button>
            )}
          </div>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;