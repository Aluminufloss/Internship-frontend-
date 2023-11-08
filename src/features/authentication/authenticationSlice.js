import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  formType: "Login",
  token: "",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateEmail(state, action) {
      state.email = action.payload;
    },

    updateFormType(state, action) {
      state.formType = action.payload;
    },

    updateToken(state, action) {
      state.token = action.payload;
    }
    
  }
});

export const { updateEmail, updateFormType, updateToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;