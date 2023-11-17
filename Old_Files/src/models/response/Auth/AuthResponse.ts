import { IUser } from "./IUser";

export interface AuthRespone {
  accessToken: string;
  refreshToken: string;
  user: IUser,
}