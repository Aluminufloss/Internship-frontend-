import React from "react";
import styled, {css} from "styled-components";

type TextProps = {
  children?: React.ReactNode; 
  color?: "primary" | "secondary";
  fontSize?: number;
};

const COLOR = {
  primary: css`
    color: #fff;
    background-color: #FABB18;
  `,
  secondary: css`
    color: #000;
    background-color: #F1B006;
  `,
};

export const Text = styled.p<TextProps>`
  font-size: 16px;
  font-weight: 500;
  ${(props) => props.color && COLOR[props.color]}
`;
