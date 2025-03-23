import React from "react";
import {
  FaBirthdayCake,
  FaVenusMars,
  FaTint,
  FaDna,
  FaAllergies,
  FaStethoscope,
  FaPills,
  FaUserFriends,
  FaPhone,
} from "react-icons/fa";

const PatientInfo = ({ formData, handleChange, errors }) => {
  return (
    <>
      {/* Date of Birth */}
      <div className="form-group">
        <label htmlFor="dateOfBirth">
          <FaBirthdayCake /> Date of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
      </div>

      {/* Gender */}
      <div className="form-group">
        <label htmlFor="gender">
          <FaVenusMars /> Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      {/* Blood Group */}
      <div className="form-group">
        <label htmlFor="bloodGroup">
          <FaTint /> Blood Group
        </label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        >
          <option value="">Select Blood Group</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>

      {/* Genotype */}
      <div className="form-group">
        <label htmlFor="genotype">
          <FaDna /> Genotype
        </label>
        <select
          id="genotype"
          name="genotype"
          value={formData.genotype}
          onChange={handleChange}
        >
          <option value="">Select Genotype</option>
          <option value="AA">AA</option>
          <option value="AS">AS</option>
          <option value="SS">SS</option>
          <option value="AC">AC</option>
          <option value="SC">SC</option>
        </select>
      </div>

      {/* Allergies */}
      <div className="form-group">
        <label htmlFor="allergies">
          <FaAllergies /> Allergies
        </label>
        <input
          type="text"
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          placeholder="List any allergies"
        />
      </div>

      {/* Pre-existing Conditions */}
      <div className="form-group">
        <label htmlFor="preExistingConditions">
          <FaStethoscope /> Pre-existing Conditions
        </label>
        <input
          type="text"
          id="preExistingConditions"
          name="preExistingConditions"
          value={formData.preExistingConditions}
          onChange={handleChange}
          placeholder="List any pre-existing conditions"
        />
      </div>

      {/* Current Medications */}
      <div className="form-group">
        <label htmlFor="currentMedications">
          <FaPills /> Current Medications
        </label>
        <input
          type="text"
          id="currentMedications"
          name="currentMedications"
          value={formData.currentMedications}
          onChange={handleChange}
          placeholder="List current medications"
        />
      </div>

      {/* Emergency Contact Name */}
      <div className="form-group">
        <label htmlFor="emergencyContactName">
          <FaUserFriends /> Emergency Contact Name
        </label>
        <input
          type="text"
          id="emergencyContactName"
          name="emergencyContactName"
          value={formData.emergencyContactName}
          onChange={handleChange}
          required
        />
        {errors.emergencyContactName && (
          <span className="error">{errors.emergencyContactName}</span>
        )}
      </div>

      {/* Emergency Contact Phone */}
      <div className="form-group">
        <label htmlFor="emergencyContactPhone">
          <FaPhone /> Emergency Contact Phone
        </label>
        <input
          type="tel"
          id="emergencyContactPhone"
          name="emergencyContactPhone"
          value={formData.emergencyContactPhone}
          onChange={handleChange}
          required
        />
        {errors.emergencyContactPhone && (
          <span className="error">{errors.emergencyContactPhone}</span>
        )}
      </div>

      {/* Consent to Share Data */}
      <div className="form-group consent-checkbox">
        <label htmlFor="consentToShareData">
          <input
            type="checkbox"
            id="consentToShareData"
            name="consentToShareData"
            checked={formData.consentToShareData}
            onChange={handleChange}
          />
          I consent to share my medical data with authorized healthcare providers.
        </label>
      </div>
    </>
  );
};

export default PatientInfo;