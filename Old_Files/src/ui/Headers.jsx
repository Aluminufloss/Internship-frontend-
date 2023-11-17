import React from "react";
import styled from "styled-components";

function Header({ children }) {
  return (
    <StyledHeader>
      { children }
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  background-color: var(--color-white);
  color: var(--color-white);
  border-bottom: 1px solid var(--color-grey-light);
  font-size: 2rem;
`

export default Header;
