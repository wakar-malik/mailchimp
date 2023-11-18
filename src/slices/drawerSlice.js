import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const drawerSlice = createSlice({
  name: "drawerSlice",
  initialState,
  reducers: {
    handleDrawer(state) {
      state.isOpened = state.isOpened === true ? false : true;
    },
  },
});

export const { handleDrawer } = drawerSlice.actions;
export default drawerSlice.reducer;
