import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { getArticles } from "./articleSlice";
import { IArticle } from "../../models/response/Article/IArticle";

import List from "../../ui/List";
import Article from "../../ui/Article";

const ArticleList: React.FC = () => {
  const articles = useAppSelector((state) => state.article.articles);
  const category = useAppSelector((state) => state.article.currentCategory);

  const dispatch = useAppDispatch();

  const renderArticle = (article: IArticle) => {
    return (
      <Article article={article} />
    );
  };

  useEffect(() => {
    (async function getArticlesFromAPI() {
      try {
        dispatch(getArticles({category}));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [category, dispatch]);

  return (
    <ArticleContainer>
      <List items={articles} renderItem={renderArticle}/>
    </ArticleContainer>
  )
};

const ArticleContainer = styled.div`
  margin: 110px 0 30px;
  display: flex;
  justify-content: center;
`;

export default ArticleList;
