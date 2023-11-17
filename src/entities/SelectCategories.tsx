import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

import Select from "../ui/Select";

import { getCategories, setCurrentCategory } from "../features/article/articleSlice";

type SelectCategoriesProps = {
  className?: string;
  exceptCategory?: string | undefined;
}

const SelectCategories: React.FC<SelectCategoriesProps> = (props) => {
  const categories = useAppSelector((state) => state.article.categories);
  const currentCategory = useAppSelector((state) => state.article.currentCategory);

  const dispatch = useAppDispatch();

  function handleOnChange(ev: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setCurrentCategory(ev.target.value));
  }

  useEffect(() => {
    (async function getArticleCategories(exceptCategory: string | undefined) {
      if (exceptCategory !== undefined) {
        dispatch(getCategories({ exceptCategory }));
      } else dispatch(getCategories({ }));
    })(props.exceptCategory);

  }, [dispatch]);

  return (
    <Select value={currentCategory} array={categories} onChange={handleOnChange} className={props.className}/>
  )
};

export default SelectCategories;
