import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import apiArticles from "../../services/apiArticle";
import ArticleItem from "./ArticleItem";
import { addItem, clearArticles } from "./articleSlice";

function ArticleList() {
  const articles = useSelector((state) => state.article.articles);
  const currentCategory = useSelector((state) => state.article.currentCategory);

  const dispatch = useDispatch();

  useEffect(() => {
    async function getArticles(currentCategory) {
      try {
        const articles = await apiArticles(currentCategory);
        dispatch(clearArticles());
        dispatch(addItem(articles));
      } catch (err) {
        console.log(err);
      }
    }

    getArticles(currentCategory);
  }, [dispatch, currentCategory]);

  return (
    <ArticleContainer>
      {articles.map((article) => {
        return (
          <ArticleItem
            key={article._id}
            id={article._id}
            heading={article.heading}
            text={article.value}
            category={article.category}
          />
        );
      })}
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  margin: 11rem 0 3rem;
  
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80rem, 1fr));
  gap: 3rem; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
 
`;

export default ArticleList;
