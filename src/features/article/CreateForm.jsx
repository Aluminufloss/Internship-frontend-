import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import apiArticleCreate from "../../services/apiArticleCreate";
import { useSelector } from "react-redux";

function CreateForm() {
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  
  const token = useSelector((state) => state.authentication.token);

  let categories = useSelector((state) => state.article.categories);
  categories = categories.filter((category) => category.value !== "All");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      apiArticleCreate({ heading, category, value, token });
      navigate("/articles");
    } catch (e) {
      console.log(e);
    }

    return;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Heading as="h2">Create an article</Heading>
      <FormRowVertical label="Article's heading">
        <Input
          type="text"
          value={heading}
          placeholder="Heading"
          id="heading"
          onChange={(e) => setHeading(e.target.value)}
          required
        />
      </FormRowVertical>
      <FormRowVertical label="Article's category">
        <StyledSelect onChange={(e) => setCategory(e.target.value)}>
          {(categories.map((category) => (
            <option key={category._id} value={category.value}>
              {category.label}
            </option>
          )))}
        </StyledSelect>
      </FormRowVertical>
      <FormRowVertical label="Article's text">
        <Textarea
          type="text"
          value={value}
          placeholder="Your text"
          id="textarea"
          onChange={(e) => setValue(e.target.value)}
          required
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button>Create</Button>
      </FormRowVertical>
    </StyledForm>
  );
}

const StyledSelect = styled.select`
  width: 36rem;
  height: 4rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--color-grey-light);
  border-radius: 0.8rem;
  background-color: var(--color-white);
  color: var(--color-black);
`;

const StyledForm = styled.form`
  width: 48rem;
  height: 80rem;
  border-radius: 0.8rem;
  border: 1px solid var(--color-grey-light);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default CreateForm;
