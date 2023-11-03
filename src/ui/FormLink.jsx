import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { updateFormType } from "../features/authentication/authenticationSlice";

function FormLink({ formType }) {
  const dispatch = useDispatch();

  return (
    <StyledLink>
      {formType === "Login" ? (
        <p>
          Don't have an account?
          <a onClick={() => dispatch(updateFormType("Register"))}>Register</a>
        </p>
      ) : (
        <p>
          Already have an account?
          <a onClick={() => dispatch(updateFormType("Login"))}>Login</a>
        </p>
      )}
    </StyledLink>
  );
}

const StyledLink = styled.div`
  font-size: 1.6rem;
  margin-top: 8rem;

  & a {
    display: inline-block;
    margin-left: 0.4rem;
    cursor: pointer;
    color: var(--color-primary);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px) scale(1.05);
      color: var(--color-primary-darker);
    }
  }
`;

export default FormLink;
