import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "../../models/response/Article/IArticle";

type ArticleState = {
  articles: IArticle[],
  category: string,
}

const initialState: ArticleState = {
  articles: [],
  category: "",
}

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IArticle>) {
      state.articles.push(action.payload);
    },

    updateCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    }
  },
});

export const { addItem, updateCategory } = articleSlice.actions;
export default articleSlice.reducer;
