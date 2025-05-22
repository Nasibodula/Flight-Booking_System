import React, { useState } from "react";
import ArrivalTime from "./components/ArrivalTime";
import DepartureTime from "./components/DepartureTime";
import FromCountry from "./components/FromCountry";
import ToCountry from "./components/ToCountry";
import FlightNumber from "./components/FlightNumber";
import FlightDate from "./components/FlightDate";

import { Icon } from "@iconify/react";

const FlightStatus = () => {
  const [selectedOption, setSelectedOption] = useState("flightNo");
  const [toCountry, setToCountry] = useState("");
  const [fromCountry, setFromCountry] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [date, setDate] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flight-status-wrapper">
      <div className="flight-status">
        <div className="flight-status-content">
          <div className="flight-status-dropdown-wrapper">
            <div className="input-container">
              <select
                className="flight-status-dropdown"
                onChange={handleOptionChange}
                value={selectedOption}
              >
                <option value="arrival">Arrival</option>
                <option value="departure">Departure</option>
                <option value="flightNo">Flight No</option>
                <option value="route">Route</option>
              </select>
              <span className="custom-arrow">
                <Icon icon="mdi:chevron-down" />
              </span>
            </div>
          </div>
          {selectedOption === "arrival" && (
            <div className="flight-status-arrival">
              <ToCountry toCountry={toCountry} setToCountry={setToCountry} />
              <ArrivalTime
                arrivalTime={arrivalTime}
                setArrivalTime={setArrivalTime}
              />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          {selectedOption === "departure" && (
            <div className="flight-status-departure">
              <FromCountry
                fromCountry={fromCountry}
                setFromCountry={setFromCountry}
              />
              <DepartureTime
                departureTime={departureTime}
                setDepartureTime={setDepartureTime}
              />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          {selectedOption === "flightNo" && (
            <div className="flight-status-flightNo">
              <FlightNumber
                flightNumber={flightNumber}
                setFlightNumber={setFlightNumber}
              />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          {selectedOption === "route" && (
            <div className="flight-status-route">
              <FromCountry
                fromCountry={fromCountry}
                setFromCountry={setFromCountry}
              />
              <ToCountry toCountry={toCountry} setToCountry={setToCountry} />
              <FlightDate date={date} setDate={setDate} />
            </div>
          )}
          <button className="flight-status-button">
            <Icon icon="mdi:clock-edit-outline" />
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightStatus;
