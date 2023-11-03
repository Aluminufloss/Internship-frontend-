import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import apiArticles from "../../services/apiArticle";

function ArticleList() {
  const articles = useSelector((state) => state.article.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getArticles() {
      try {
        const articles = await apiArticles();
        console.log(articles);
      } catch (err) {
        console.log(err);
      }
    }

    getArticles();
  }, []);

  return (
    <div>
      success article
    </div>
  )
};

export default ArticleList;
