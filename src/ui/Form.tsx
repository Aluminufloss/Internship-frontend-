import React from "react";
import styled from "styled-components";

type FormProps = {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string; 
  width?: string;
  height?: string;
}

const Form:React.FC<FormProps> = (props) => {
  return (
    <StyledForm onSubmit={props.onSubmit} className={props.className}>
      { props.children }
    </StyledForm>
  )
};

const StyledForm = styled.form`
  width: 480px;
  height: 500px;
  border-radius: 8px;
  border: 1px solid ${props => `${props.theme.colors.lightGrey}`};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default Form;
