import $api from "../axios/index";
import { AxiosResponse } from "axios";
import { CategoryResponse } from "../models/response/Category/CategoryResponse";

export default class CategoryService {
  static async getCategories(): Promise<AxiosResponse<CategoryResponse>> {
    return $api.get<CategoryResponse>("/categories");
  }
}