import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

import Login from "./Pages/Login";
import Article from "./Pages/Article";
import CreateArticle from "./Pages/CreateArticle";
import NotFoundPage from "./Pages/NotFound";
import ArticleDetails from "./Pages/ArticleDetails";

import { checkAuth } from "./features/authentication/authentificationSlice";
import ProtectedRoute from "./utils/ProtectedRoute";

import { useAppDispatch } from "./hooks/hook";

const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    } else console.log("something wrong");
  }, [dispatch]);

  return (
    <Theme>
      <GlobalStyles />
      <Routes>
        <Route index path="/login" element={<Login formType="Login" />} />
        <Route
          path="/registration"
          element={<Login formType="Registration" />}
        />
        <Route
          path="/articles"
          element={ <Article /> }
        />
        <Route path="/articles" element={<Article />} />
        <Route
          path="/articles/create"
          element={
            <ProtectedRoute>
              <CreateArticle />
            </ProtectedRoute>
          }
        />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Theme>
  );
};

export default App;
