import React, { useState } from "react";
import PNRCode from "./components/PNRCode";
import PNRSurname from "./components/PNRSurname";

import { Icon } from "@iconify/react";

const CheckIn = () => {
  const [PNRCodeInput, setPNRCodeInput] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <div className="check-in-wrapper">
      <div className="check-in">
        <PNRCode
          PNRCodeInput={PNRCodeInput}
          setPNRCodeInput={setPNRCodeInput}
        />
        <PNRSurname surname={surname} setSurname={setSurname} />
        <button className="check-in-button">
          <Icon icon="mdi:check" />
          Check-In
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
