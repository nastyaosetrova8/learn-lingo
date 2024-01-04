import { createSlice } from '@reduxjs/toolkit';
import { notifyLoginSuccess, notifyRegisterError } from '../../shared/NotificationToastify/Toasts';
import { logOutUser, loginUser, registerUser } from './authThunks';

const initialState = {
  userId: null,
  nickname: null,
  email: null,
  stateChange: false,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStateChanged: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickname: payload.nickname,
      email: payload.email,
      stateChange: true,
    }),
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.nickname = payload.displayName;
        state.email = payload.mail;
      })
      .addCase(registerUser.rejected, (error) => {
        notifyRegisterError(error);
      })
      .addCase(loginUser.fulfilled, (data) => {
        notifyLoginSuccess(data)
      })
      .addCase(loginUser.rejected, (error) => {
        notifyRegisterError(error);
      })
      .addCase(logOutUser.fulfilled, state => {
        state.userId = null;
        state.nickname = null;
        state.email = null;
        state.stateChange = false;
      }),
});

export const authReducer = authSlice.reducer;
export const onStateChange = authSlice.actions.authStateChanged;