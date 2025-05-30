import React, { useState } from "react";
import PNRCode from "./components/PNRCode";
import PNRSurname from "./components/PNRSurname";

import { Icon } from "@iconify/react";

const ManageMyBooking = () => {
  const [PNRCodeInput, setPNRCodeInput] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <div className="manage-booking-wrapper">
      <div className="manage-booking">
        <PNRCode
          PNRCodeInput={PNRCodeInput}
          setPNRCodeInput={setPNRCodeInput}
        />
        <PNRSurname surname={surname} setSurname={setSurname} />
        <button className="manage-booking-button">
          <Icon icon="mdi:settings-outline" />
          Manage Booking
        </button>
      </div>
    </div>
  );
};

export default ManageMyBooking;
