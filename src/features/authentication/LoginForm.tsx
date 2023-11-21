import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Link from "../../ui/Link";
import { Text } from "../../ui/Text";

import { login, registration } from "./authentificationSlice";

import { useAppDispatch } from "../../hooks/hook";

import { checkFormType } from "../../utils/helper";

type LoginProps = {
  formType: string;
};

const LoginForm: FC<LoginProps> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  function handleLinkClick() {
    if (props.formType === "Login") navigate("/registration");
    else navigate("/login");
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;

    try {
      if (checkFormType(props.formType)) {
        dispatch(login({ email, password }));
        navigate("/articles");
      } else {
        dispatch(registration({ email, password }));
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <StyledLoginForm>
      <Form onSubmit={handleSubmit}>
        <Heading headingType="h5" className="heading">
          {checkFormType(props.formType)
            ? "Log in to your account"
            : "Register now"}
        </Heading>
        <Input
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <Input
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <Button className="button">
          {checkFormType(props.formType) ? "Log in" : "Register"}
        </Button>
        <StyledLinkContainer>
          <Text className="text-link" fontSize="primary">
            {checkFormType(props.formType)
              ? "Don't have an account?"
              : "Already have an account?"}
          </Text>
          <Link onClick={handleLinkClick}>
            {checkFormType(props.formType) ? "Register" : "Login"}
          </Link>
        </StyledLinkContainer>
      </Form>
    </StyledLoginForm>
  );
};

const StyledLoginForm = styled.div`
  position: relative;

  .heading {
    margin-top: 100px;
  }

  .input {
    margin-top: 30px;
  }

  .button {
    margin-top: 30px;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  left: auto;

  .text-link {
    margin-right: 4px;
  }
`;

export default LoginForm;
