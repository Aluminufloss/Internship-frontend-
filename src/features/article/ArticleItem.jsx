import React from "react";
import styled from "styled-components";

function ArticleItem({ id, heading, text, category }) {
  return (
    <StyledArticleItem>
      <img src="" alt="Article image" className="article__img" />
      <div className="article__inner">
        <span className="article_user-id">{ id }</span>
        <h1>{ heading }</h1>
        <p>{ text }</p>
        <span>{ category }</span>
      </div>
    </StyledArticleItem>
  )
};

const StyledArticleItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80rem;
  height: 40rem;
  border-radius: 1.5rem;
  border: 1px solid var(--color-grey-light);
  background-color: var(--color-white);

  .article__img {
    height: 100%;
    width: 40rem;
    background-color: red;
    overflow: hidden;
  }

  .article__inner {
    margin: 2.4rem;
    display: flex;
    flex-direction: column;
    background-color: yellow;
  }
`;

export default ArticleItem;
