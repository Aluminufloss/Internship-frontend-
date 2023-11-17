import React from "react";
import styled from "styled-components";

import { IArticle } from "../models/response/Article/IArticle";

type ArticleProps = {
  article: IArticle;
}

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <StyledArticle>
      <img src="" alt="Article" className="article__img" />
      <div className="article__inner">
        <span className="article_user-id">{ props.article.id }</span>
        <h1 className="article__heading">{ props.article.heading }</h1>
        <p className="article__text">{ props.article.value }</p>
        <span className="article__category">{ props.article.category }</span>
      </div>
    </StyledArticle>
  )
};

const StyledArticle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 700px;
  height: 400px;
  border-radius: 16px;
  border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
  background-color: ${props => `1px solid ${props.theme.colors.white}`};
  box-shadow: none;
  transition: transform .5s ease;

  .article__img {
    height: 100%;
    width: 50%;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    border-right: ${props => `1px solid ${props.theme.colors.lightGrey}`};
  }

  .article__inner {
    margin: 32px;
    display: flex;
    flex-direction: column;
  }

  .article__text {
    margin-top: 24px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 41px 2px rgba(34, 60, 80, 0.1);
  }
`;

export default Article;
