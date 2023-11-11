import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import FormLink from "../../ui/FormLink";

import apiAuth from "../../services/apiAuth";

import { updateEmail, updatePassword } from "./authenticationSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formType = useSelector((state) => state.authentication.formType);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    try {
      if (formType === "Login") {
        dispatch(updateEmail(email));
        dispatch(updatePassword(password));
        apiAuth({ email, password });
        navigate('/articles');
      } else {
        console.log('something');
      }
    } catch (err) {
      console.log(err);
    }

    return;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading as="h2">{formType === "Login" ? "Log in to your account" : "Register now"}</Heading>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          value={email}
          placeholder="Your email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          value={password}
          placeholder="Your password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">{formType === "Login" ? "Log in" : "Register"}</Button>
      </FormRowVertical>
      <FormLink formType={formType} />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 48rem;
  height: 50rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-light);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginForm;
