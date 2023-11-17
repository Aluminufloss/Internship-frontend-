import React from "react";
import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Input from "../ui/Input";


function Login() {
  return (
    <LoginLayout>
      <LoginForm />
    </LoginLayout>
  )
};

const StyledInput = styled(Input)`
  border: 1px solid green;
`;

const LoginLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {

    &__headline {
      background-color: red;
    }

    &__input {
      border: 1px solid tomato;
    }
  }
`


export default Login;
