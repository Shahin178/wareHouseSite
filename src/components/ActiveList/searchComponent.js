import React, { useState } from "react";
// use redux dispatch to update the state
import { useDispatch } from "react-redux";
import { searchAction } from "../Action/Action";
import "./searchComponent.css";

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // use redux dispatch to update the state
  const dispatch = useDispatch();

  // dispatch the action here
  const handleSearch = () => {
    dispatch(searchAction(searchQuery));
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <button
        className="reset-button"
        onClick={() => {
          setSearchQuery("");
          dispatch(searchAction(""));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default SearchComponent;
