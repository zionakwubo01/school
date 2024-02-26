import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "" || null,
  toggle: false,
  toggle2: false,
  toggle3: false,
};

const Reduxstate = createSlice({
  name: "school",
  initialState,
  reducers: {
    loginState: (state: any, { payload }) => {
      state.user = payload;
    },
    logoutstate: (state: any) => {
      state.user = null;
    },
    chengeToggle: (state: any, { payload }) => {
      state.toggle = payload;
    },
    chengeToggle2: (state: any, { payload }) => {
      state.toggle2 = payload;
    },
    chengeToggle3: (state: any, { payload }) => {
      state.toggle3 = payload;
    },
  },
});

export const { loginState, chengeToggle, chengeToggle2, chengeToggle3 } =
  Reduxstate.actions;

export default Reduxstate.reducer;
