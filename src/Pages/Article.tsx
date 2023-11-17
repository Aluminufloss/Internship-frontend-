import { FC } from "react";
import styled from "styled-components";
import Header from "../ui/Header";
import SelectCategories from "../entities/SelectCategories";
import ArticleList from "../features/article/ArticleList";
import LinkButton from "../ui/LinkButton";
import MainPageUsername from "../entities/MainPageUsername";

const Article: FC = () => {
  return (
    <ArticleLayout>
      <Header>
        <MainPageUsername />
        <SelectCategories />
        <LinkButton to="/articles/create">
          Создать статью
        </LinkButton>
      </Header>
      <ArticleList />
    </ArticleLayout>
  )
};

const ArticleLayout = styled.div`
`;

export default Article;
