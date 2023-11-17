import React from "react";
import styled, {css} from "styled-components";

type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  children?: React.ReactNode; 
  color?: "primary" | "secondary"; 
  className?:string;
};

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Container 
     className={props.className}
     onClick={props.onClick}
     color={props.color ?? 'primary'} 
    >
      {props.children}
    </Container>
  )
};

const COLOR = {
  primary: css`
    color: ${props => `${props.theme.colors.white}`};
    background-color: ${props => `${props.theme.colors.primary}`};
  `,
  secondary: css`
    color: ${props => `${props.theme.colors.black}`};
    background-color: ${props => `${props.theme.colors.primaryDark}`};
  `,
};

const Container = styled.button<ButtonProps>`
  padding: 8px 15px;
  width: 280px;
  height: 40px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    background-color: ${props => `${props.theme.colors.primaryDark}`};
  }

  ${(props) => props.color && COLOR[props.color]}
`;

export default Button;