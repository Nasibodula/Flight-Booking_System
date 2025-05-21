import React from "react";



const FlightNumber = ({
  flightNumber,
  setFlightNumber,
}) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={flightNumber}
        onChange={(e) => setFlightNumber(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="flightNumber"
      />
      <label htmlFor="flightNumber" className="floating-label">
        Flight Number
      </label>
    </div>
  );
};

export default FlightNumber;
