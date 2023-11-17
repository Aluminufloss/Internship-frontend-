import React from "react";
import styled from "styled-components";

type ListItemProps = {
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  return (
    <StyledListItem >
      {props.children}
    </StyledListItem>
  )
}

const StyledListItem = styled.li`

`;

export default ListItem;
