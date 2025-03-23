import React from "react";
import { FaIdCard, FaHospital, FaMapMarkerAlt } from "react-icons/fa";

const PharmacistInfo = ({ formData, handleChange, errors }) => {
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
        <label htmlFor="pharmacyName">
          <FaHospital /> Pharmacy Name
        </label>
        <input
          type="text"
          id="pharmacyName"
          name="pharmacyName"
          value={formData.pharmacyName}
          onChange={handleChange}
          required
        />
        {errors.pharmacyName && <span className="error">{errors.pharmacyName}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="pharmacyAddress">
          <FaMapMarkerAlt /> Pharmacy Address
        </label>
        <input
          type="text"
          id="pharmacyAddress"
          name="pharmacyAddress"
          value={formData.pharmacyAddress}
          onChange={handleChange}
          required
        />
        {errors.pharmacyAddress && <span className="error">{errors.pharmacyAddress}</span>}
      </div>
    </>
  );
};

export default PharmacistInfo;