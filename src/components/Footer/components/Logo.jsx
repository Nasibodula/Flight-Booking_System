import React from "react";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className="footer-logo">
      <Link to="/">
        <img
          src="/img/logo.png"
          alt="FlightRoutes Logo"
          width={100}
          height={30}
        />
      </Link>
    </div>
  );
};

export default Logo;
