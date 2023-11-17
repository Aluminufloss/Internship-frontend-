import { IArticle } from "../Article/IArticle";

export interface ArticleResponse {
  article: IArticle,
}

export interface ListOfArticlesResponse {
  articles: IArticle[],
}