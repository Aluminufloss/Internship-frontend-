import React from "react";
import styled from "styled-components";

import CreateForm from "../features/article/CreateForm";

function CreateArticle() {
  return (
    <ArticleLayout>
      <CreateForm />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CreateArticle;
