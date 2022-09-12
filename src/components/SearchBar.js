import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { SearchContext } from '../contexts/SearchContext';

import search_icon from '../assets/search_icon.png'

function SearchBar() {
  let globalSearch = useContext(SearchContext);

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const applySearch = (event) => {
    event.preventDefault();
    globalSearch.setGlobalSearchText((oldVal) => searchValue);
    navigate("/udemy-page-in-react");
  }

  const searchBoxUpdated = (event) => {
    setSearchValue((oldVal) => event.target.value);
  }

  return (
    <form onSubmit={applySearch} action="" className="search_bar">
      <button className="search_icon" type="submit"><img src={search_icon} alt="search" /></button>
      <input onChange={searchBoxUpdated} className="search_box" type="text" placeholder="Search for anything" />
      <input className="search_button" type="submit" value="Search" />
    </form>
  )
}

export default SearchBar