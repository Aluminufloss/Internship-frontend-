import React, { useEffect, useState } from "react";
import styled from "styled-components";

import apiCategories from "../services/apiCategories";

function SelectCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        setCategories(apiCategories);
      } catch (err) {
        console.log(err);
      }
    }

    getCategories();
  }, []);

  return (
    <StyleSelect>
      {categories.map((category) => <option value={category.value}>{category.label}</option>)}
    </StyleSelect>
  )
};

const StyleSelect = styled.select`
  width: 5rem;
  height: 3rem;
`

export default SelectCategories;
