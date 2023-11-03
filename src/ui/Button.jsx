import styled, { css } from "styled-components";

const sizes = {
  large: css`
    width: 28rem;
    height: 4rem;
    font-size: 1.6rem;
    padding: 0.8rem 0;
    font-weight: 500;
  `
}

const variations = {
  primary: css`
    color: var(--color-white);
    background-color: var(--color-primary);

    &:hover {
      background-color: var(--color-primary-darker);
    }
  `
}

const Button = styled.button`
  border: none;
  border-radius: .8rem;
  transition: all .3s ease;

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }

  &:active {
    transform: translateY(0)
  }

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variations]}
`;

Button.defaultProps = {
  variations: "primary",
  size: "medium",
};

export default Button;