import $api from "../axios/index";
import { AxiosResponse } from "axios";
import { AuthRespone } from "../models/response/Auth/AuthResponse";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthRespone>> {
    return $api.post<AuthRespone>("/login", { email, password });
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthRespone>> {
    return $api.post<AuthRespone>("/registration", { email, password });
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}

// const foo = (
//   name: string,
//   age: number,
//   company: string,
//   year?: number,
//   cost?: number,
//       ) => {

// }