import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function ArticleItem(props) {
  const {heading, id, text, category} = props;
  const navigate = useNavigate();

  function handleClick(id) {
    navigate(`/articles/:${id}`);
  }

  return (
    <StyledArticleItem onClick={() => handleClick(id)}>
      <img src="" alt="Article image" className="article__img" />
      <div className="article__inner">
        <span className="article_user-id">{ id }</span>
        <h1>{ heading }</h1>
        <p>{ text } </p>
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
  transition: all .5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 33px -1px rgba(0, 0, 0, 0.2);
  }

  .article__img {
    height: 100%;
    width: 40rem;
    border-right: 1px solid black;
    overflow: hidden;
  }

  .article__inner {
    margin: 2.4rem;
    display: flex;
    flex-direction: column;
  }
`;

export default ArticleItem;
