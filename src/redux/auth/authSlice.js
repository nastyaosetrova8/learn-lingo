import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  id: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.name = payload.name;
      state.email = payload.email;
      state.id = payload.id;
      state.token = payload.token;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
