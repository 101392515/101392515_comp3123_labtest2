import React, { useState } from 'react';
import './Search.css'; 

const Search = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city && onSearch) {
      onSearch(city);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchClick();
    }
  };
  

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
