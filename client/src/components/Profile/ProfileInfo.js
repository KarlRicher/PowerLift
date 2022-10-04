import React from "react";
import styled from "styled-components";

const ProfileInfo = () => {
  return (
    <Wrapper>
      <h1>Profile Info</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 33.33%;
  height: 200px;
  padding: 30px;
  color: black;
`;
export default ProfileInfo;
