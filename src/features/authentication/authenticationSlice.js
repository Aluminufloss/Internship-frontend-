import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  formType: "Login",
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    updateEmail(state, action) {
      state.email = action.payload;
    },

    updatePassword(state, action) {
      state.password = action.payload;
    },

    updateFormType(state, action) {
      state.formType = action.payload;
    },
    
  }
});

export const { updateEmail, updatePassword, updateFormType } = authenticationSlice.actions;
export default authenticationSlice.reducer;