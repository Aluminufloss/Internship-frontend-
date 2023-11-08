import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  categories: [],
  currentCategory: "All",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addItem(state, action) {
      state.articles.push(...action.payload);
    },

    clearArticles(state, action) {
      state.articles = [];
    },

    addCategories(state, action) {
      state.categories = [];
      state.categories.push(...action.payload);
    },

    updateCategory(state, action) {
      state.currentCategory = action.payload;
    },
  },
});

export const { addItem, clearArticles, addCategories, updateCategory } = articleSlice.actions;
export default articleSlice.reducer;
