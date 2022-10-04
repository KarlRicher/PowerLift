import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <SearchDiv>
      <Input type="text" placeholder="Search" />
    </SearchDiv>
  );
};

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.33%;
`;

const Input = styled.input`
  font-size: 1.5em;
  height: 2em;
  width: 100%;
  padding: 0 15px;
  border-radius: 30px;
  border: 0.5px solid black;
  background: #f2f2f2;
`;

export default SearchBar;
