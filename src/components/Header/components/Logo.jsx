import React from "react";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <div className="header-logo">
      <Link href="/">
        <img
          src="/img/logo.png"
          alt="FlightRoutes Logo"
          width={200}
          height={200}
        />
      </Link>
    </div>
  );
};

export default Logo;
