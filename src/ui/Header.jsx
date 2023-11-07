import React from "react";
import styled from "styled-components";

import Username from "./Username";
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
      <Username />
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
