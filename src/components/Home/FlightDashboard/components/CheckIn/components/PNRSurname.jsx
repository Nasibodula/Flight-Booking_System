import React from "react";



const PNRSurname = ({ surname, setSurname }) => {
  return (
    <div className="input-container">
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder=" "
        className="floating-input"
        id="PNRSurnameInput"
      />
      <label htmlFor="PNRSurnameInput" className="floating-label">
        Surname
      </label>
    </div>
  );
};

export default PNRSurname;
