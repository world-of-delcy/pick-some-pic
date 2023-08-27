import React, { useState } from "react";
import useColor from "./../hooks/useColor";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { BRAND_COLOR, SECONDARY_COLOR_LIGHT } = useColor();
  const navigate = useNavigate();
  const onClick = (event) => {
    event.preventDefault();
    const searchQuery = query.trim();
    if (searchQuery.length === 0) return;
    navigate(`/search/${searchQuery}`);
  };
  return (
    <>
      <form className="d-flex flex-grow-1 me-2" role="search">
        <input
          className={`form-control search-input border-${SECONDARY_COLOR_LIGHT}`}
          type="search"
          placeholder="Pick Some here..."
          aria-label="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className={`search-btn btn btn-outline-${BRAND_COLOR} border-${SECONDARY_COLOR_LIGHT}`}
          type="submit"
          onClick={onClick}
        >
          <i className="fa-solid fa-search"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
