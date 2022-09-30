import React from "react";
import styled from "styled-components";

import Feed from "./Feed";
import MoreOptions from "./Sidebar";
import News from "./News";

const Home = () => {
  return (
    <Wrapper>
      <MoreOptions />
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
