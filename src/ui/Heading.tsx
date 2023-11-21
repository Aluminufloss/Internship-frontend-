import { ReactNode } from "react";
import styled, { css } from "styled-components";

type HeadingProps = {
  children: ReactNode;
  headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "secondary";
  fontSize?: string,
  className?: string;
};

const Heading: React.FC<HeadingProps> = (props) => {
  return (
    <StyledHeading
      color={props.color ?? "primary"}
      fontSize={props.fontSize ?? ""}
      headingType={props.headingType}
      className={props.className}
    >
      {props.children}
    </StyledHeading>
  );
};

const COLOR = {
  primary: css`
    color: ${props => `${props.theme.colors.black}`};
  `,
  secondary: css`
    color: ${props => `${props.theme.colors.primary}`};
  `,
};

const StyledHeading = styled.h1<HeadingProps>`
  ${(props) =>
    props.headingType === "h1" &&
    css`
      font-size: ${props => `${props.theme.fontSizes.large}`};
      font-weight: 600;
    `}

  ${(props) =>
    props.headingType === "h2" &&
    css`
      font-size: ${props => `${props.theme.fontSizes.mediumLarge}`};
      font-weight: 600;
    `}

  ${(props) =>
    props.headingType === "h3" &&
    css`
      font-size: ${props => `${props.theme.fontSizes.mediumLarge}`};
      font-weight: 500;
    `}

  ${(props) =>
    props.headingType === "h4" &&
    css`
      font-size: ${props => `${props.theme.fontSizes.medium}`};
      font-weight: 600;
    `}

  ${(props) =>
    props.headingType === "h5" &&
    css`
      font-size: ${props => `${props.theme.fontSizes.mediumSmall}`};
      font-weight: 600;
    `}

  ${(props) => props.color && COLOR[props.color]}
  line-height: 14px;
`;

export default Heading;
