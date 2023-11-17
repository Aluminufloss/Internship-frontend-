import React from "react";
import styled from "styled-components";

function Select(props) {
  return (
    <StyledSelect value={props.value} onChange={props.onChange}>
      {props.array.map((value) => (
        <option key={value.id} value={value.value}>
          {value.label}
        </option>
      ))}
    </StyledSelect>
  );
}

const StyledSelect = styled.select`
  width: 15rem;
  height: 4rem;
  margin-left: 4rem;
  text-align: center;
  border-radius: 0.8rem;
  color: var(--color-black);
`;

export default Select;
