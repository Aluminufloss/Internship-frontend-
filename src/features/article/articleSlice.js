import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  category: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addItem(state, action) {
      state.articles.push(...action.payload);
    },

    updateCategory(state, action) {
      state.category = action.payload;
    }
  },
});

export const getArticlesByCategory = () => (state) => {
  state.article.articles.filter((article) => article.category === state.category);
}

export const getArticles = (state) => state.article.articles;

export const getCategory = (state) => state.article.category;

export const { addItem, updateCategory } = articleSlice.actions;
export default articleSlice.reducer;
