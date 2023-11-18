import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  logInError: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.logInError = action.payload.logInError;
    },
    logOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export function logIn(userDetails) {
  return function (dispatch, state) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (
      !user.email === userDetails.email &&
      !user.password === userDetails.password
    ) {
      dispatch({
        type: "login/logIn",
        payload: { isLoggedIn: false, logInError: false },
      });
      return;
    }

    dispatch({
      type: "login/logIn",
      payload: { isLoggedIn: true, logInError: true },
    });
  };
}

export const { logOut } = loginSlice.actions;
export default loginSlice.reducer;
