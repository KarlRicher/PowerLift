import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { FiHome, FiBell, FiMail, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const { user } = useAuth0();

  return (
    <Wrapper>
      <SidebarLinks>
        <Icon>
          <FiHome />
        </Icon>
        <Span>Home</Span>
      </SidebarLinks>

      <SidebarLinks to={`/profile/${user.email}`}>
        <Icon>
          <ProfilePic src={user.picture} />
        </Icon>

        <Span>Profile</Span>
      </SidebarLinks>

      <SidebarLinks to={"/notifications"}>
        <Icon>
          <FiBell />
        </Icon>
        <Span>Notifications</Span>
      </SidebarLinks>

      <SidebarLinks to={"/messaging"}>
        <Icon>
          <FiMail />
        </Icon>
        <Span>Messaging</Span>
      </SidebarLinks>

      <SidebarLinks to={"/settings"}>
        <Icon>
          <FiSettings />
        </Icon>
        <Span>Settings</Span>
      </SidebarLinks>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 33.33%;
  height: 200px;
  padding: 30px;
  color: black;
`;

const SidebarLinks = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 15px 0;
  font-size: 2em;

  text-decoration: none;
  border-radius: 5px;
  color: #595959;

  &:hover {
    color: black;
  }

  &.active {
    color: #cc0000;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`;

const Span = styled.span`
  margin-left: 15px;
`;

const ProfilePic = styled.img`
  width: 1em;
  height: 1em;
  border: 1px solid black;
  border-radius: 100px;

  &:hover {
    cursor: pointer;
  }
`;

export default Sidebar;
