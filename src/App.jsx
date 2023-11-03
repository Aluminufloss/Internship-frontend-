import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyle";
import Login from "./pages/Login";
import Article from "./pages/Article";
import Tests from "./pages/Tests";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyles />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/test" element={<Tests />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </>
  )
};

export default App;


//Memory router - doesn't change the url
//static router - what page you currently render