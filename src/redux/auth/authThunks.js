import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';


export const registerUser = createAsyncThunk(
  'auth/signUpUser',
  async ({ email, password, login }, thunkApi) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
      });
      const { uid, displayName, mail } = auth.currentUser;
      return { uid, displayName, mail };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/signInUser',
  async ({ email, password }, thunkApi) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/singOutUser',
  async (_, thunkApi) => {
    try {
      await signOut(auth);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);