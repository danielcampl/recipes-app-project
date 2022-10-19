import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import profileIcon from "../images/profileIcon.svg";
import searchIcon from "../images/searchIcon.svg";
import SearchBar from "./SearchBar";

function Header(props) {
  const [searchBar, setSearchBar] = useState(false);
  const history = useHistory();

  function userRedirectPage() {
    history.push("/profile");
  }

  function handleEnableBar() {
    setSearchBar(!searchBar);
  }

  const { enableSearch, title } = props;
  return (
    <div className="header">
      <h1 data-testid="page-title">{title}</h1>
      <div className="header-btn">
      <button type="button" onClick={userRedirectPage} className="footer-btn">
        <img
          src={profileIcon}
          alt="profileIcon"
          data-testid="profile-top-btn"
          className="footer-img"
        />
      </button>
      {enableSearch && (
        <button type="button" onClick={handleEnableBar} className="footer-btn">
          <img
            src={searchIcon}
            alt="searchIcon"
            data-testid="search-top-btn"
            className="footer-img"
          />
        </button>
      )}
      </div>
      {searchBar && <SearchBar />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  enableSearch: PropTypes.bool,
}.isRequired;

export default Header;
