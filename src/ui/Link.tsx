import styled, { css } from "styled-components";

type LinkProps = {
  children: string; 
  color?: "primary" | "secondary"; 
  onClick?: (event: React.MouseEvent<HTMLLinkElement>) => void; 
}

const Link: React.FC<LinkProps> = (props) => {
  return (
    <StyledLink 
      color={props.color ?? "primary"} 
      onClick={props.onClick}
    >
      { props.children }
    </StyledLink>
  )
}

const COLOR = {
  primary: css`
    color: ${props => `${props.theme.colors.primary}`};
  `,
  secondary: css`
    color: ${props => `${props.theme.colors.black}`};
  `,
};

const StyledLink = styled.a<LinkProps>`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  ${(props) => props.color && COLOR[props.color]}

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
`;

export default Link;
