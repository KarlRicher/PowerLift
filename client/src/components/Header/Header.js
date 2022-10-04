import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { GiVikingHelmet } from "react-icons/gi";

import LogoutButton from "./Logout";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <Wrapper>
      <LogoDiv>
        <LogoLink to={"/"}>
          <Span>PowerLift</Span>

          <GiVikingHelmet />
        </LogoLink>
      </LogoDiv>
      <SearchBar />
      <LogoutDiv>
        <LogoutButton />
      </LogoutDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  padding: 15px;
  border-bottom: 1px solid black;
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 33.33%;
`;

const LogoLink = styled(Link)`
  display: flex;
  color: #cc0000;
  font-size: 2em;
  text-decoration: none;

  margin-right: 15px;
`;

const Span = styled.span`
  margin-right: 10px;
`;

const LogoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 33.33%;
`;

export default Header;
