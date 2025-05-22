import React from "react";
import { marketLinks } from "../../../data/marketData";

const BrandActions = () => {
  return (
    <div className="brand-actions-content">
      <div className="copyright">
        <p>© 2024 Flight Routes. All Rights Reserved.</p>
      </div>
      <div className="markets">
        {marketLinks.map((market) => (
          <a
            key={market.name}
            href={market.url}
            target="_blank"
            rel="noopener noreferrer"
            className="market-link"
          >
            <img
              src={market.icon}
              alt={market.name}
              className="market-icon"
              width={150}
              height={150}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrandActions;
