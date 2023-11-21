import { FC } from "react";
import styled from "styled-components";

import { useAppSelector } from "../hooks/hook";

import SelectCategories from "../entities/SelectCategories";
import MainPageUsername from "../entities/MainPageUsername";

import ArticleList from "../features/article/ArticleList";

import Header from "../ui/Header";
import LinkButton from "../ui/LinkButton";
import LogoutButton from "../entities/LogoutButton";
import CreateArticleLink from "../entities/CreateArticleLink";

const Article: FC = () => {
  const user = useAppSelector((state) => state.authentication.isAuth);

  return (
    <ArticleLayout>
      <Header>
        <MainPageUsername />
        {user ? (
          <>
            <SelectCategories />
            <CreateArticleLink>Создать статью</CreateArticleLink>
            <LogoutButton>Выйти</LogoutButton>
          </>
        ) : (
          <LinkButton to="/login">Войти</LinkButton>
        )}
      </Header>
      <ArticleList />
    </ArticleLayout>
  );
};

const ArticleLayout = styled.div``;

export default Article;
