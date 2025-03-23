import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const GeneralInfo = ({ formData, handleChange, errors }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="firstName">
          <FaUser /> First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName">
          <FaUser /> Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="otherName">
          <FaUser /> Other Name
        </label>
        <input
          type="text"
          id="otherName"
          name="otherName"
          value={formData.otherName}
          onChange={handleChange}
          required
        />
        {errors.otherName && <span className="error">{errors.otherName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="username">
          <FaUser /> Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <span className="error">{errors.username}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="email">
          <FaEnvelope /> Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="phoneNumber">
          <FaPhone /> Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="role">
          <FaUser /> Role
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="pharmacist">Pharmacist</option>
        </select>
        {errors.role && <span className="error">{errors.role}</span>}
      </div>
    </>
  );
};

export default GeneralInfo;