import React from "react";
import styled from "styled-components";

type UsernameProps = {
  children?: string;
}

const Username: React.FC<UsernameProps> = (props) => {
  return (
    <StyledUsername>
      {props.children}
    </StyledUsername>
  )
};

const StyledUsername = styled.span`
  margin-right: auto;
  margin-left: 30px;
`;

export default Username;
