import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    handleSignUp(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { handleSignUp } = signUpSlice;
export default signUpSlice.reducer;
