import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginPage from "./components/Login";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar";
import Calculator from "./components/Calculator";
import Leaderboard from "./components/Leaderboard";

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
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile/:userEmail" element={<Profile />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Main>
        </BrowserRouter>
      </Wrapper>
    );
  } else {
    return <LoginPage />;
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
`;

export default App;
