import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthentificationState = {
  email: string,
  password: string,
  formType: string,
}

const initialState: AuthentificationState = {
  email: "",
  password: "",
  formType: "Login",
}

const authenticationSlice = createSlice({
  name: "authentification",
  initialState,
  reducers: {
    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },

    updatePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },

    updateFormType(state, action: PayloadAction<string>) {
      state.formType = action.payload;
    },
  }
});

export const { updateEmail, updatePassword, updateFormType } = authenticationSlice.actions;
export default authenticationSlice.reducer;
