import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import searchIcon from "../../../assets/icon/search.svg";
import "./search.css";

function SearchBox({ placeholder, searchFun }) {
  const onSearch = (e) => {
    searchFun(e.target.value);
  };
  return (
    <>
      <InputGroup className="mb-3 kar-search-box">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            <img src={searchIcon} alt="icon" />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e) => onSearch(e)}
        />
      </InputGroup>
    </>
  );
}

export default SearchBox;
