import React from "react";
import styled, {css} from "styled-components";

type TextProps = {
  children?: React.ReactNode; 
  color?: "primary" | "secondary";
  fontSize?: "primary" | "secondary";
  className?: string;
};

const COLOR = {
  primary: css`
    color: #fff;
  `,
  secondary: css`
    color: #000;
  `,
};

const FONT_SIZE = {
  primary: css`
    font-size: ${ props => `${props.theme.fontSizes.smallBig}` };
  `,

  secondary: css`
    font-size: ${ props => `${props.theme.fontSizes.medium}` };
  `
}

export const Text = styled.p<TextProps>`
  font-size: ${ props => `${props.theme.fontSizes.medium}`};
  font-weight: 500;
  ${(props) => props.color && COLOR[props.color]};
  ${(props) => props.fontSize && FONT_SIZE[props.fontSize]};
`;
