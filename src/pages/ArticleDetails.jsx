import React from "react";
import styled from "styled-components";

import Header from "../ui/Header";
import ArticleItemDetails from "../features/article/ArticleItemDetails";

function ArticleDetails() {
  return (
    <ArticleLayout>
      <Header />
      <ArticleItemDetails />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ArticleDetails;
