import React from "react";



const ToCountry = ({ toCountry, setToCountry }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={toCountry}
        onChange={(e) => setToCountry(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="toCountry"
      />
      <label htmlFor="toCountry" className="floating-label">
        To
      </label>
    </div>
  );
};

export default ToCountry;
