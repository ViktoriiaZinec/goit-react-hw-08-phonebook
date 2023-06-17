import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, registerUser } from './authOperations';

const initialState = {
  user: { name: null, number: null },
  token: null,
  isLoggedIn: false,
  isRefresher: false,
};

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, { payload }) => {
      console.log('payload :>> ', payload);
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [refreshUser.pending]: state => {
      state.isRefresher = true;
    },
    [refreshUser.fulfilled]: (state, { payload }) => {
      state.isRefresher = false;
      state.isLoggedIn = true;
      state.user = payload;
    },
    [refreshUser.rejected]: state => {
      state.isRefresher = false;
    },
  },
});

export const authReducer = authSlise.reducer;
