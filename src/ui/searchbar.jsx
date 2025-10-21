

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form className="flex items-center border-amber-200 gap-2" onSubmit={handleSearch}>
      <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a route"
        className="text-gray-400 bg-transparent outline-none"
      />
    </form>
  );
}