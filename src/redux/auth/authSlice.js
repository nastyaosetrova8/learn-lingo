import { createSlice } from '@reduxjs/toolkit';
import { authSignUpUser, authSignInUser, authSingOutUser } from './operations';
import { notifyLoginSuccess, notifyRegisterError } from '../../shared/NotificationToastify/Toasts';

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
      .addCase(authSignUpUser.fulfilled, (state, { payload }) => {
        state.userId = payload.uid;
        state.nickname = payload.displayName;
        state.email = payload.mail;
      })
      .addCase(authSignUpUser.rejected, (error) => {
        notifyRegisterError(error);
      })
      .addCase(authSignInUser.fulfilled, (data) => {
        notifyLoginSuccess(data)
      })
      .addCase(authSignInUser.rejected, (error) => {
        notifyRegisterError(error);
      })
      .addCase(authSingOutUser.fulfilled, state => {
        state.userId = null;
        state.nickname = null;
        state.email = null;
        state.stateChange = false;
      }),
});

export const authReducer = authSlice.reducer;
export const onStateChange = authSlice.actions.authStateChanged;