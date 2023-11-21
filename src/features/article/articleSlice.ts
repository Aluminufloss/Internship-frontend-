import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IArticle, INewArticle } from "../../models/response/Article/IArticle";

import ArticleService from "../../services/ArticleService";
import CategoryService from "../../services/CategoryService";
import { ICategory } from "../../models/response/Category/ICategory";

type ArticleState = {
  articles: IArticle[];
  categories: ICategory[];
  currentCategory: string;
  isLoading: boolean;
};

const initialState: ArticleState = {
  articles: [],
  categories: [],
  currentCategory: "All",
  isLoading: false,
};

export const getArticles = createAsyncThunk<IArticle[], { category: string }>(
  "/articles",
  async (params) => {
      const response = await ArticleService.getArticles(params.category);
      return response.data.articles;
  }
);

export const getArticlesById = createAsyncThunk<IArticle, { id: string }>(
  "/articles/:id",
  async (params) => {
    const response = await ArticleService.getArticlesById(params.id);

    return response.data.article;
  }
);

export const createArticle = createAsyncThunk<
  INewArticle,
  { 
    article: INewArticle
  }
>("/articles/create", async (params) => {
  const response = await ArticleService.createArticle(
    params.article.heading,
    params.article.value,
    params.article.category,
  );

  return response.data.article;
});

export const getCategories = createAsyncThunk<ICategory[], { exceptCategory?: string | undefined }>(
  "/categories",
  async (params) => {
    const response = await CategoryService.getCategories();
    if (params.exceptCategory !== undefined) {
      return response.data.categories.filter((el) => el.value !== params.exceptCategory );
    } else {
      return response.data.categories;
    }
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setCurrentCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.isLoading = false;
      })

      .addCase(getArticles.rejected, (state, action) => {
        state.isLoading = false;
        throw Error("Get articles error");
      })

      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })

      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        throw Error("Get categories error");
      });
  },
});

export const { setCurrentCategory } = articleSlice.actions;

export default articleSlice.reducer;
