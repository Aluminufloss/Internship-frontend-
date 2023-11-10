import React from "react";
import styled from "styled-components";

import Header from "../ui/Header";
import ArticleList from "../features/article/ArticleList";

function Article() {
  return (
    <ArticleLayout>
      <Header />
      <ArticleList />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export default Article;
