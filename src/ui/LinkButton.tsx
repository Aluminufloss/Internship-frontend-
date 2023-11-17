import React from "react";
import styled, {css} from "styled-components";
import {Link} from "react-router-dom";


type LinkProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
  children?: React.ReactNode; 
  color?: "primary" | "secondary"; 
  to: string; 
};

const LinkButton: React.FC<LinkProps> = (props) => {
  return (
    <Container to={props.to} onClick={props.onClick} color={props.color ?? "primary"} >
      {props.children}
    </Container>
  )
};

const COLOR = {
  primary: css`
    color: ${props => `${props.theme.colors.white}`};
  `,
  secondary: css`
    color: ${props => `${props.theme.colors.black}`};
  `,
};

const Container = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  padding: 8px 15px;
  margin-right: 30px;
  margin-left: 30px;
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.lightGrey};
  border-radius: 8px;
  font-weight: 500;
  outline: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.theme.colors.primaryDark};
  }

  ${(props) => props.color && COLOR[props.color]}
`;

export default LinkButton;