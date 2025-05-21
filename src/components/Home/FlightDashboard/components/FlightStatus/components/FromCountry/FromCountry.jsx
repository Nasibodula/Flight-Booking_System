import React from "react";



const FromCountry = ({
  fromCountry,
  setFromCountry,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={fromCountry}
        onChange={(e) => setFromCountry(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="fromCountry"
      />
      <label htmlFor="fromCountry" className="floating-label">
        From
      </label>
    </div>
  );
};

export default FromCountry;
