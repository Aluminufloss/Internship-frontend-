import React, { useEffect, useState } from "react";

import Select from "../ui/Select";
import { useDispatch, useSelector } from "react-redux";

function SelectCategories() {
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
    dispatch(updateCategory(ev.target.value));
  };

  return (
    <Select
      array={categories}
      value={currentCategory}
      onChange={handleChangeSelectValue}
    />
  );
}

export default SelectCategories;
