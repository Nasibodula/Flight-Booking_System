import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { popularDestinationsData } from "../../../data/popularDestinationsData";

const PopularDestinations = () => {
  const [activeRegion, setActiveRegion] = useState(
    popularDestinationsData[0].region
  );

  const handleTabClick = (region) => {
    setActiveRegion(region);
  };

  const renderDestinations = (regionData) => {
    return (
      <div className="countries">
        {regionData.destinations.map((destination) => (
          <div key={destination.id} className="countryCard">
            <Icon icon="mdi:location-on-outline" className="icon" />
            <span>{destination.country}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="popularDestinations">
      <div className="container">
        <div className="headline">
          <div className="title">Popular Destinations</div>
          <div className="description">
            Uncover the world&apos;s hidden gems and start your journey to
            extraordinary experiences.
          </div>
        </div>
        <div className="content">
          <div className="tabs">
            {popularDestinationsData.map((region) => (
              <button
                key={region.id}
                className={`tab ${
                  activeRegion === region.region ? "active" : ""
                }`}
                onClick={() => handleTabClick(region.region)}
              >
                {region.region}
              </button>
            ))}
          </div>
          <div className="destinationsContainer">
            {popularDestinationsData
              .filter((region) => region.region === activeRegion)
              .map((region) => (
                <div key={region.id}>
                  {renderDestinations(region)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
