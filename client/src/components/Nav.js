import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { FiHome, FiBell, FiMail, FiUser, FiSettings } from "react-icons/fi";

const Nav = () => {
  return (
    <Wrapper>
      <NavbarLinks to={"/"}>
        <Icon>
          <FiHome />
        </Icon>
        <Span>Home</Span>
      </NavbarLinks>

      <NavbarLinks to={"/notifications"}>
        <Icon>
          <FiBell />
        </Icon>
        <Span>Notifications</Span>
      </NavbarLinks>

      <NavbarLinks to={"/messaging"}>
        <Icon>
          <FiMail />
        </Icon>
        <Span>Messaging</Span>
      </NavbarLinks>

      <NavbarLinks to={"/profile"}>
        <Icon>
          <FiUser />
        </Icon>
        <Span>Profile</Span>
      </NavbarLinks>

      <NavbarLinks to={"/settings"}>
        <Icon>
          <FiSettings />
        </Icon>
        <Span>Settings</Span>
      </NavbarLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLinks = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 5px;
  margin: 5px;

  text-decoration: none;
  border-radius: 5px;
  color: #595959;

  &:hover {
    color: black;
  }
`;

const Icon = styled.div`
  font-size: 1.5em;
`;

const Span = styled.span`
  margin-left: 5px;
`;

export default Nav;
