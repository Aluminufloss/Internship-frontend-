import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Login from "./pages/Login";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import CreateArticle from "./pages/CreateArticle";
import ArticleDetails from "./pages/ArticleDetails";

function App() {
  return (
    <>
      <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/articles/create" element={<CreateArticle />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  )
};

export default App;