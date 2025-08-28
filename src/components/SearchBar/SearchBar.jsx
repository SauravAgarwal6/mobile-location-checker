import React from 'react';
import './SearchBar.css';

// 1. Import the Font Awesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// 2. Import the specific icon from the FREE solid icons pack
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar({ number, setNumber, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={onSearch}>
        {/* 3. Use the icon you imported */}
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <span>Search</span>
      </button>
    </div>
  );
}

export default SearchBar;