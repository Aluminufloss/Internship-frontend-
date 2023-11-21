import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/hook";
import { getArticlesById } from "../features/article/articleSlice";
import { IArticle } from "../models/response/Article/IArticle";

import Heading from "../ui/Heading";
import { Text } from "../ui/Text";

type ParamTypes = {
  id: string;
}

 const Details: React.FC = () => {
  const { id } = useParams<keyof ParamTypes>() as ParamTypes;
  const [article, setArticle] = useState<IArticle>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async function getArticlesFromAPI() {
      try {
        const response = await dispatch(getArticlesById({ id }));
        const data: IArticle = response.payload as IArticle;
        setArticle(data)
      } catch (err) {
        console.log(err);
      }
    })();
  }, [dispatch, id]);
  
  return (
    <StyledArticleDetails>
      <Heading headingType="h1">
        { article?.heading }
      </Heading>
      <Heading headingType="h2" className="heading">
        { `Article category is ${article?.category}` }
      </Heading>
      <Text className="text">
        { article?.value }
      </Text>
    </StyledArticleDetails>
  )
};

const StyledArticleDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 110px 0 30px;

  .heading, .text {
    margin-top: 60px;
  }
`;

export default Details;
