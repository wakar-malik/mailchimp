import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  isLoggedIn: false,
  logInError: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    logIn(state, action) {
      if (
        state.email === action.payload.email &&
        state.password === action.payload.password
      ) {
        state.isLoggedIn = true;
      } else {
        state.logInError = true;
      }
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
    signUp(state, action) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLoggedIn = true;
    },
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;

export function signUp() {
  return function (dispatch, state) {
    const user = JSON.parse(localStorage.getItem("user"));

    dispatch({ type: "login/signUp", payload: user });
  };
}
