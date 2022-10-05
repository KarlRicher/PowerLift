import React from "react";
import styled from "styled-components";

const News = () => {
  return (
    <Wrapper>
      <h1>News</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  height: 200px;
  padding: 30px;
  color: black;
`;
export default News;
