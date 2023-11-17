import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Login from "./pages/Login";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";
import CreateArticle from "./pages/CreateArticle";
import Test from "./pages/Test";

const App: FC = () => {
  return (
    <>
      <GlobalStyles />
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/create" element={<CreateArticle />} />
          <Route path="*" element={<NotFound />} /> */}
          <Route path="/" element={<Test />} />
        </Routes>
    </>
  )
};

export default App;