import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    fetch("/api/get-users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setUsersArray(data.data);
      });
  }, []);

  const matchedSuggestions = usersArray.filter((user) => {
    return (
      (user.firstName.toLowerCase().includes(value.toLowerCase()) &&
        value.length > 1) ||
      (user.lastName.toLowerCase().includes(value.toLowerCase()) &&
        value.length > 1)
    );
  });

  const displayedSuggestions = matchedSuggestions.slice(0, 10);

  const handleSelect = (user) => {
    // this window alert will be changed so that it brings you to a page with the item you clicked
    navigate(`/profile/${user.email}`);
    setValue("");
  };

  return (
    <SearchDiv>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSelect(event.target.value);
          }
        }}
      />

      {matchedSuggestions.length > 0 && (
        <SuggestionList>
          {displayedSuggestions.map((user) => {
            return (
              <SuggestionListItem key={user} onClick={() => handleSelect(user)}>
                <>
                  {user.firstName.slice(
                    0,
                    user.firstName.toLowerCase().indexOf(value.toLowerCase()) +
                      value.length
                  )}

                  <Prediction>
                    {user.firstName.slice(
                      user.firstName
                        .toLowerCase()
                        .indexOf(value.toLowerCase()) + value.length
                    ) + " "}
                  </Prediction>
                </>
                <>
                  {user.lastName.slice(
                    0,
                    user.lastName.toLowerCase().indexOf(value.toLowerCase()) +
                      value.length
                  )}

                  <Prediction>
                    {user.lastName.slice(
                      user.lastName.toLowerCase().indexOf(value.toLowerCase()) +
                        value.length
                    )}
                  </Prediction>
                </>
              </SuggestionListItem>
            );
          })}
        </SuggestionList>
      )}
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

const SuggestionList = styled.ul`
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  background: white;

  position: absolute;
  top: 70px;

  width: 33.33%;

  z-index: 2;
`;

const SuggestionListItem = styled.li`
  min-height: 20px;
  padding: 5px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;
const Prediction = styled.span`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

export default SearchBar;
