import React, { useEffect } from "react";



const DepartureTime = ({
  departureTime,
  setDepartureTime,
}) => {
  useEffect(() => {
    if (!departureTime) {
      const now = new Date();
      const currentTime = now.toTimeString().slice(0, 5);
      setDepartureTime(currentTime);
    }
  }, [departureTime, setDepartureTime]);

  return (
    <div className="input-container">
      <input
        type="time"
        value={departureTime}
        onChange={(e) => setDepartureTime(e.target.value)}
        className="floating-input"
        id="departureTime"
      />
      <label htmlFor="departureTime" className="floating-label">
        Departure Time
      </label>
    </div>
  );
};

export default DepartureTime;
