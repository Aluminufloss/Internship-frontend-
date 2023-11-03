import React from "react";
import ArticleList from "../features/article/ArticleList";
import styled from "styled-components";

function Article() {
  return (
    <ArticleLayout>
      <ArticleList />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Article;
