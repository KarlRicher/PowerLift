import React, { useContext } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { FiHome, FiBell, FiMail, FiSettings } from "react-icons/fi";
import { BsGrid3X3, BsCalculator } from "react-icons/bs";
import { UserContext } from "./UserContext";

const Sidebar = () => {
  const { fetchedUser } = useContext(UserContext);

  return (
    <Wrapper>
      <SmallerWrapper>
        <SidebarLinks to={"/"} end>
          <Icon>
            <FiHome />
          </Icon>
          <Span>Home</Span>
        </SidebarLinks>

        <SidebarLinks to={"/leaderboard"}>
          <Icon>
            <BsGrid3X3 />
          </Icon>
          <Span>Leaderboard</Span>
        </SidebarLinks>

        <SidebarLinks to={"/calculator"}>
          <Icon>
            <BsCalculator />
          </Icon>
          <Span>GL Points Calculator</Span>
        </SidebarLinks>

        <SidebarLinks to={`/profile/${fetchedUser.email}`}>
          <Icon>
            <ProfilePic src={fetchedUser.avatar} />
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
      </SmallerWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 33.33%;
`;

const SmallerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
