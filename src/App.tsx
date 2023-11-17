import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyle";
import Theme from "./styles/Theme";

import Login from "./Pages/Login";
import Article from "./Pages/Article";
import CreateArticle from "./Pages/CreateArticle";

const App: FC = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login formType="Login"/>} />
        <Route path="/registration" element={<Login formType="Registration"/>} />
        <Route path="/articles" element={<Article/>} />
        <Route path="/articles/create" element={<CreateArticle/>}/>
      </Routes>
    </Theme>
  );
};

export default App;
