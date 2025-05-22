import React from "react";


const SearchHistory = ({
  storedSearchHistory,
  handleHistoryClick,
  formatSearchQuery,
}) => {
  return (
    <div className="search-history">
      <span className="search-history-title">Recently Searched</span>
      <ul className="search-history-list">
        {storedSearchHistory.map((query, index) => (
          <li className="search-history-item" key={index} onClick={() => handleHistoryClick(query)}>
            {formatSearchQuery(query)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
