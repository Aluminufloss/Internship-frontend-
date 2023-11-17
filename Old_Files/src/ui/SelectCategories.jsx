import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import apiCategories from "../services/apiCategories";
import {
  updateCategory,
  addCategories,
} from "../features/article/articleSlice";

function SelectCategories(props) {
  const [categories, setCategories] = useState([]);
  const currentCategory = useSelector((state) => state.article.currentCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await apiCategories();
        dispatch(addCategories(data));
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    }

    getCategories();
  }, [dispatch]);

  const handleChangeSelectValue = (ev) => {
    dispatch(updateCategory(ev.target.value))
  };

  return (
    <StyledSelect
      onChange={handleChangeSelectValue}
      value={currentCategory}
    >
      {categories.map((category) => (
        <option key={category._id} value={category.value}>
          {category.label}
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

export default SelectCategories;
