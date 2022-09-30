import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";

// import FourCookies from "../assets/FourCookies.jpeg";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginButton />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  /* background: ; */
`;

export default LoginPage;
