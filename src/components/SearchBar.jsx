import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchInput, setSearchInput, handleSearch, handleKeyPress }) => {

  const handleReset = () => {
    setSearchInput(''); // reset input menjadi kosong
  };

  return (
    <div className="mb-8">
      <div className="flex gap-2 max-w-md mx-auto">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Cari kota..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border-0 shadow-lg focus:ring-2 focus:ring-blue-300 outline-none text-black"
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-white text-blue-600 px-4 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition-colors"
        >
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
