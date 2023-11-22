import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/response/Auth/IUser";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthRespone } from "../../models/response/Auth/AuthResponse";
import { API_URL } from "../../utils/constant";

type AuthentificationState = {
  user: IUser;
  isLoading: boolean;
  isAuth: boolean;
};

const initialState: AuthentificationState = {
  user: {
    id: "",
    email: "User",
  },
  isLoading: false,
  isAuth: false,
};

export const login = createAsyncThunk<
  IUser,
  { 
    email: string;
    password: string 
  }
>("/login", async (params) => {
  const response = await AuthService.login(params.email, params.password);
  localStorage.setItem("token", response.data.accessToken);

  return response.data.user;
});

export const registration = createAsyncThunk<
  IUser,
  { 
    email: string;
    password: string 
  }
>("/registration", async (params) => {
  const response = await AuthService.registration(
    params.email,
    params.password
  );

  return response.data.user;
});

export const logout = createAsyncThunk("/logout", async () => {
  await AuthService.logout();
  localStorage.removeItem("token");
});

export const checkAuth = createAsyncThunk("/refresh", async () => {
  const response = await axios.get<AuthRespone>(`${API_URL}/refresh`, { withCredentials: true });
  localStorage.setItem("token", response.data.accessToken);

  return response.data.user;
})

// export const getMe = createAsyncThunk("/user", async () => {
//   const response = await axios.get<AuthRespone>(`${API_URL}/user`, { withCredentials: true });

//   return response.data.user;
// })

export const getMe = createAsyncThunk("/user", async () => {
  const response = await AuthService.getMe();
  console.log(response.data.user);

  return response.data.user;
})

const authenticationSlice = createSlice({
  name: "authentification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isAuth = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.user = action.payload;
      })

      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
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
      })

      .addCase(getMe.pending, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
      })

      .addCase(getMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isAuth = true;
      })

      .addCase(getMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        throw Error("Authorization error");
      })

      .addCase(logout.pending, (state, action) => {
        state.isLoading = false;
      })

      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
      })

      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        throw Error("Login error");
      })
  },
});

export default authenticationSlice.reducer;