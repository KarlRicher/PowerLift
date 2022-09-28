import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { GiVikingHelmet } from "react-icons/gi";

import Nav from "./Nav";

const Header = () => {
  return (
    <Wrapper>
      <LogoDiv>
        <LogoLink to={"/"}>
          <Span>PowerLift</Span>

          <GiVikingHelmet />
        </LogoLink>
      </LogoDiv>
      <SearchDiv>
        <Input type="text" placeholder="Search" />
      </SearchDiv>
      <Nav />
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
  justify-content: center;
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

const SearchDiv = styled.div`
  width: 30%;
`;

const Input = styled.input`
  font-size: 1.5em;
  width: 100%;
`;

export default Header;
