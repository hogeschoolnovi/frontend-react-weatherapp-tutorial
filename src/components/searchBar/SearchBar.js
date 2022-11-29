import React, {  useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <span className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="Zoek een stad in Nederland"
      />

      <button type="button">
        Zoek
      </button>
    </span>
  );
}

export default SearchBar;
