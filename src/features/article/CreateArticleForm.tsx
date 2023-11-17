import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";

import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import SelectCategories from "../../entities/SelectCategories";
import Textarea from "../../ui/Textarea";

const CreateArticleForm: React.FC = () => {
  const [heading, setHeading] = useState("");
  const [category, setCategory] = useState("Home");
  const [value, setValue] = useState("");
                                                  
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <StyledCreateForm>
      <StyledForm onSubmit={handleSubmit}>
        <Heading headingType="h2" className="heading">
          Create an article
        </Heading>
        <Input
          type="text"
          placeholder="Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="input"
        />
        <SelectCategories className="select" exceptCategory="All"/>
        <Textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder="Your text" className="textarea"/>
        <Button className="button">
          Create
        </Button>
      </StyledForm>
    </StyledCreateForm>
  );
};

const StyledCreateForm = styled.div`
  position: relative;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  .heading, & {
    margin-top: 120px;
  }

  .input, .textarea, .select {
    margin-top: 30px;
  }

  .button {
    margin-top: 30px;
  }
`;

const StyledForm = styled(Form)`
  height: 800px;
`

export default CreateArticleForm;
