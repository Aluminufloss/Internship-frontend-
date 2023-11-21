import React from "react";
import styled from "styled-components";

type UsernameProps = {
  children?: string;
  className?: string;
}

const Username: React.FC<UsernameProps> = (props) => {
  return (
    <StyledUsername className={props.className}>
      {props.children}
    </StyledUsername>
  )
};

const StyledUsername = styled.span`
`;

export default Username;
