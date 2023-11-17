import React from "react";
import styled from "styled-components";

import ListItem from "./ListItem";

type ListProps<T> = {
  items: T[]; 
  renderItem: (item: T) => React.ReactNode;
}

const List = <T extends {id: string}>(props: ListProps<T>) => {
  return (
    <StyledList>
      {props.items.map((item, i) => (
        <ListItem key={i}>
          {props.renderItem(item)}
        </ListItem>
      ))}
    </StyledList>
  )
};

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 700px);
  gap: 40px;

`;

export default List;
