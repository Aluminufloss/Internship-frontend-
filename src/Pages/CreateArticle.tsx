import { FC } from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import LinkButton from "../ui/LinkButton";
import CreateArticleForm from "../features/article/CreateArticleForm";

const CreateArticle: FC = () => {
  return (
    <ArticleLayout>
      <Header>
        <LinkButton to="/articles">
          Вернуться
        </LinkButton>
      </Header>

      <CreateArticleForm />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CreateArticle;