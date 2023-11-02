import React from "react";
import styled from "styled-components";

import Input from "../../ui/Input";
import Heading from "../../ui/heading";

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

function LoginForm() {
  return (
    <StyledForm>
      <Heading as="h2">Log in to your account</Heading>
      <Input />
    </StyledForm>
  )
};

export default LoginForm;
