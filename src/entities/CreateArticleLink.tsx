import React from "react";
import styled from "styled-components";

import LinkButton from "../ui/LinkButton";


type CreateArticleProps = {
  children: React.ReactNode,
  className?: string,
}

const CreateArticleLink: React.FC<CreateArticleProps> = (props) => {
  return (
    <StyledLinkButton to="/articles/create">
      {props.children}
    </StyledLinkButton>
  )
};

const StyledLinkButton = styled(LinkButton)`
  margin-left: 30px;
`
export default CreateArticleLink;
