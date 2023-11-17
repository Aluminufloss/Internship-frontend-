import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

function Username() {
  const username = useSelector((state) => state.authentication.email)

  return (
    <StyledUsername>
      {username}
    </StyledUsername>
  )
};

const StyledUsername = styled.div`
  margin-right: 3rem;
  color: var(--color-black);
`

export default Username;
