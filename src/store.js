import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import signUpSlice from "./slices/signUpSlice";
import drawerSlice from "./slices/drawerSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    signUp: signUpSlice,
    drawer: drawerSlice,
  },
});

export default store;
