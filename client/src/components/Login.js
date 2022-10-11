import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import background from "../assets/login-background.jpeg";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Login onClick={() => loginWithRedirect()}>Enter the Iron Sanctuary</Login>
  );
};

const LoginPage = () => {
  return (
    <Wrapper>
      <Welcome>Welcome, Lifter</Welcome>
      <LoginButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  /* background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover; */
`;

const Welcome = styled.div`
  padding: 50px;
  font-size: 100px;
`;

const Login = styled.button`
  width: 30%;
  border-radius: 15px;
  border: none;
  color: white;
  background-color: #cc0000;
  font-size: 20px;
  padding: 10px;
  margin-bottom: 20px;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default LoginPage;
