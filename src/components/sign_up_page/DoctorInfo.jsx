import React from "react";
import { FaIdCard, FaBriefcaseMedical, FaHospital, FaMapMarkerAlt } from "react-icons/fa";

const DoctorInfo = ({ formData, handleChange, errors }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="licenseNumber">
          <FaIdCard /> License Number
        </label>
        <input
          type="text"
          id="licenseNumber"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          required
        />
        {errors.licenseNumber && <span className="error">{errors.licenseNumber}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="specialization">
          <FaBriefcaseMedical /> Specialization
        </label>
        <input
          type="text"
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
        {errors.specialization && <span className="error">{errors.specialization}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="hospitalName">
          <FaHospital /> Hospital Name
        </label>
        <input
          type="text"
          id="hospitalName"
          name="hospitalName"
          value={formData.hospitalName}
          onChange={handleChange}
          required
        />
        {errors.hospitalName && <span className="error">{errors.hospitalName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="hospitalAddress">
          <FaMapMarkerAlt /> Hospital Address
        </label>
        <input
          type="text"
          id="hospitalAddress"
          name="hospitalAddress"
          value={formData.hospitalAddress}
          onChange={handleChange}
          required
        />
        {errors.hospitalAddress && <span className="error">{errors.hospitalAddress}</span>}
      </div>
    </>
  );
};

export default DoctorInfo;