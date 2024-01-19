import React, { useState, forwardRef } from 'react';

const SearchBox = forwardRef(({ onSearch }, ref) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Passes the entered text to the onSearch function
  };

  return (
    <div ref={ref} className="search-box-container flex items-center rounded-full border-2 border-gray-600 bg-[#171717] pl-4 pr-3 py-2 w-full max-w-lg mx-auto">
      <input
        type="search"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full bg-transparent text-sm text-white placeholder-gray-400 border-none focus:outline-none focus:placeholder-gray-300"
      />
      <button
        type="submit"
        aria-label="Search"
        className="ml-2 p-2"
        onClick={(e) => {
          e.preventDefault();
          onSearch(searchTerm);
        }}
      >
        {/* SVG Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
  );
});

export default SearchBox;
