import React from "react";
import styled from "styled-components";

import Feed from "./Feed";
import ProfileInfo from "./ProfileInfo";
import News from "./News";

const Home = () => {
  return (
    <Wrapper>
      <ProfileInfo />
      <Feed />
      <News />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100vw;
`;

export default Home;
