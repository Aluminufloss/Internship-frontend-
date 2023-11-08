import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import apiArticleDetails from "../../services/apiArticleDetails";

function ArticleItemDetails() {
  const { id } = useParams();
  const [heading, setHeading] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    async function getArticle(id) {
      try {
        const article = await apiArticleDetails(id);
        setHeading(article.heading);
        setValue(article.value);
        setCategory(article.category);
      } catch (e) {
        console.log(e);
      }
    }

    getArticle(id);
  }, [id]);


  return (
    <StyledArticleDetails>
      <h1>{heading}</h1>
      <h2>{value}</h2>
      <h3>{category}</h3>
    </StyledArticleDetails>
  )
};

const StyledArticleDetails = styled.div`
  width: 50rem;
  height: 50rem;
  color: black;
`

export default ArticleItemDetails;
