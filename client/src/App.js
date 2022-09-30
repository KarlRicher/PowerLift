import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginPage from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  const { isLoading, isAuthenticated, error } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <Wrapper>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Main>
        </BrowserRouter>
      </Wrapper>
    );
  } else {
    return <LoginPage />;
  }
};

const Wrapper = styled.div``;

const Main = styled.div``;

export default App;
