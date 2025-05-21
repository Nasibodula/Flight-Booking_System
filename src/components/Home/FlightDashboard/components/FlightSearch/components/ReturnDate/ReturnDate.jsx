import React from "react";

const ReturnDate = ({
  returnDate,
  setReturnDate,
  departureDate,
}) => {
  return (
    <div className="input-container">
      <input
        type="date"
        value={returnDate}
        min={departureDate}
        onChange={(e) => setReturnDate(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="returnDate"
      />
      <label htmlFor="returnDate" className="floating-label">
        Return Date
      </label>
    </div>
  );
};

export default ReturnDate;
