import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import apiArticles from "../../services/apiArticle";
import ArticleItem from "./ArticleItem";
import { addItem } from "./articleSlice";

function ArticleList() {
  const articles = useSelector((state) => state.article.articles);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getArticles() {
      try {
        const articles = await apiArticles();
        dispatch(addItem(articles));
      } catch (err) {
        console.log(err);
      }
    }

    getArticles();
  }, [dispatch]);

  return (
    <ArticleContainer>
      {articles.map((article) => (
        <ArticleItem
          key={article._id}
          id={article._id}
          heading={article.heading}
          text={article.value}
          category={article.category}
        />
      ))}
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  margin: 13rem auto 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

export default ArticleList;
