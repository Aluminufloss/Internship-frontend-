import React from "react";
import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

const LoginLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Login() {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  )
};

export default Login;
