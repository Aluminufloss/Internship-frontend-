import React from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import { useNavigate } from "react-router-dom";
import SelectCategories from "../ui/SelectCategories";
import LinkButton from "../ui/LinkButton";

function AppHeader() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/articles/create');
  }

  return (
    <Header>
      
      <LinkButton onClick={handleClick} />
    </Header>
  )
};



export default AppHeader;
