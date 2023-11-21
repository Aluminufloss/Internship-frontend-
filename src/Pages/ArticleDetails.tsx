import React from "react";
import styled from "styled-components";

import Details from "../entities/Details";
import MainPageUsername from "../entities/MainPageUsername";

import Header from "../ui/Header";
import LinkButton from "../ui/LinkButton";

 const ArticleDetails: React.FC = () => {
  
  return (
    <StyledArticleDetails>
      <Header>
        <MainPageUsername />
        <LinkButton to="/articles">
          Вернуться
        </LinkButton>
      </Header>
      <Details />
    </StyledArticleDetails>
  )
};

const StyledArticleDetails = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default ArticleDetails;
