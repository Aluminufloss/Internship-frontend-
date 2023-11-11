import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import FormRowVertical from "../../ui/FormRowVertical";
import Button from "../../ui/Button";
import Textarea from "../../ui/Textarea";

import {apiArticleCreate} from "../../services/apiArticleCreate";

function CreateForm() {
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    try {
      e.preventDefault();
    
      apiArticleCreate({ heading, category, text });
    
      return;
    } catch(e) {
      console.log(e)
    }
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
      <Input
        type="text"
        value={category}
        placeholder="Category"
        id="category"
        onChange={(e) => setCategory(e.target.value)}
        required
      />
    </FormRowVertical>
    <FormRowVertical label="Article's text">
      <Textarea 
        type="text"
        value={text}
        placeholder="Your text"
        id="textarea"
        onChange={(e) => setText(e.target.value)}
        required
      />
    </FormRowVertical>
    <FormRowVertical>
      <Button>Create</Button>
    </FormRowVertical>
  </StyledForm>
  )
};

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