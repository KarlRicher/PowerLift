import React from "react";
import styled from "styled-components";

import Feed from "./Feed";
import News from "./News";

const Home = () => {
  return (
    <Wrapper>
      <Feed />
      <News />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 66.66%;
`;

export default Home;
