import React from "react";
import styled from "styled-components";

import Button from "./Button";
import { useNavigate } from "react-router-dom";
import SelectCategories from "./SelectCategories";

function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/articles/create');
  }

  return (
    <StyledHeader>
      <SelectCategories />
      <Button onClick={handleClick}>
        Создать статью
      </Button>

    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 8rem;
  padding: 0 3rem;
  gap: 2rem;
  background-color: var(--color-white);
  color: var(--color-white);
  border-bottom: 1px solid var(--color-grey-light);
  font-size: 2rem;
`

export default Header;
