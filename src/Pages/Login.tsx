import { FC } from "react";
import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";

type LoginProps = {
  formType: string;
}

const Login: FC<LoginProps> = (props) => {
  return (
    <LoginLayout>
      <LoginForm formType={props.formType}/>
    </LoginLayout>
  )
};


const LoginLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Login;