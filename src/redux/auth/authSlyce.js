import { createSlice } from '@reduxjs/toolkit';
import { logOut, loginUser, refreshUser, registerUser } from './authOperations';

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
    [loginUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlise.reducer;
