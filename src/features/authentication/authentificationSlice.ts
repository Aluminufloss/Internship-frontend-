import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/response/Auth/IUser";
import AuthService from "../../services/AuthService";

type AuthentificationState = {
  user: IUser;
  isLoading: boolean;
};

const initialState: AuthentificationState = {
  user: {
    id: "",
    email: "",
  },
  isLoading: false,
};

export const login = createAsyncThunk<
  IUser,
  { email: string; password: string }
>("/login", async (params) => {
  const response = await AuthService.login(params.email, params.password);
  localStorage.setItem("user", response.data.user.email);
  localStorage.setItem("userID", response.data.user.id);
  localStorage.setItem("token", response.data.accessToken);

  return response.data.user;
});

export const registration = createAsyncThunk<
  IUser,
  { email: string; password: string }
>("/registration", async (params) => {
  const response = await AuthService.registration(
    params.email,
    params.password
  );

  //&

  return response.data.user;
});

export const logout = createAsyncThunk("/logout", async () => {
  await AuthService.logout();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userID");
});

const authenticationSlice = createSlice({
  name: "authentification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        throw Error("Login error");
        // console.log("Login error");
      })

      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })

      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        console.log("error");
      });
  },
});

export default authenticationSlice.reducer;