import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

import Login from "./Pages/Login";
import Article from "./Pages/Article";
import CreateArticle from "./Pages/CreateArticle";
import NotFoundPage from "./Pages/NotFound";
import ArticleDetails from "./Pages/ArticleDetails";

import ProtectedRoute from "./utils/ProtectedRoute";

import { useInitialized } from "./hooks/useInitialized";

const App: FC = () => {
  const isInitialized = useInitialized();
  console.log(isInitialized)

  return (
    <Theme>
      <GlobalStyles />
      {isInitialized ? (
        <Routes>
          <Route index path="/login" element={<Login formType="Login" />} />
          <Route
            path="/registration"
            element={<Login formType="Registration" />}
          />
          <Route path="/articles" element={<Article />} />
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
      ) : (
        "Loading..."
      )}
    </Theme>
  );
};

export default App;
