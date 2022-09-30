import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { FiHome, FiBell, FiMail, FiSettings } from "react-icons/fi";
import LogoutButton from "./Logout";

const Nav = () => {
  const { user } = useAuth0();

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
        <ProfilePic src={user.picture} />
        <Span>Profile</Span>
      </NavbarLinks>

      <NavbarLinks to={"/settings"}>
        <Icon>
          <FiSettings />
        </Icon>
        <Span>Settings</Span>
      </NavbarLinks>
      <LogoutButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 33.33%;
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

const ProfilePic = styled.img`
  width: 1.5em;
  height: 1.5em;
  border: 1px solid black;
  border-radius: 100px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export default Nav;
