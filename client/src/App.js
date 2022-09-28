import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.div``;

export default App;
