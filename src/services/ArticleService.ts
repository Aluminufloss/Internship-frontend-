import $api from "../axios/index";
import { AxiosResponse } from "axios";
import { ArticleResponse, ListOfArticlesResponse } from "../models/response/Article/ArticleResponse";

export default class ArticleService {
  static async getArticles(category: string): Promise<AxiosResponse<ListOfArticlesResponse>> {
    return $api.post<ListOfArticlesResponse>("/articles", { category });
  }

  static async getArticlesById(): Promise<AxiosResponse<ArticleResponse>> {
    return $api.get<ArticleResponse>("/articles:id");
  }

  static async createArticle(heading: string, value: string, category: string): Promise<AxiosResponse<ArticleResponse>> {
    return $api.post<ArticleResponse>("/articles/create", { heading, value, category });
  }
}