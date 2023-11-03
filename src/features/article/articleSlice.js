import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userID: "",
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addItem(state, action) {
      state.articles.push(action.payload);
    },
  },
});

export const { addItem } = articleSlice.actions;
export default articleSlice.reducer;
