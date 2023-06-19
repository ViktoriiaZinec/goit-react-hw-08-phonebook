import { createSlice } from '@reduxjs/toolkit';
import { logOut, loginUser, refreshUser, registerUser } from './authOperations';

const initialState = {
  user: { name: null, number: null },
  token: null,
  isLoggedIn: false,
  isRefresher: false,
};
const fetchStatus = {
  Idle: 'idle',
  Loading: 'loading',
  Success: 'success',
  Error: 'error',
};

// export const authSlise = createSlice({
//   name: 'auth',
//   initialState,
//   extraReducers: {
//     [registerUser.fulfilled]: (state, { payload }) => {
//       state.token = payload.token;
//       state.isLoggedIn = true;
//     },
//     [refreshUser.pending]: state => {
//       state.isRefresher = true;
//     },
//     [refreshUser.fulfilled]: (state, { payload }) => {
//       state.isRefresher = false;
//       state.isLoggedIn = true;
//       state.user = payload;
//     },
//     [refreshUser.rejected]: state => {
//       state.isRefresher = false;
//     },
//     [loginUser.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     [logOut.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//   },
// });

const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.status = fetchStatus.Loading;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, state => {
        state.status = fetchStatus.Error;
      })
      .addCase(refreshUser.pending, state => {
        state.status = fetchStatus.Loading;
        state.isRefresher = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.isRefresher = false;
        state.isLoggedIn = true;
        state.user = payload;
      })
      .addCase(refreshUser.rejected, state => {
        state.status = fetchStatus.Error;
        state.isRefresher = false;
      })
      .addCase(loginUser.pending, state => {
        state.status = fetchStatus.Loading;
        state.status = fetchStatus.Loading;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.Success;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, state => {
        state.status = fetchStatus.Error;
      })
      .addCase(logOut.pending, state => {
        state.status = fetchStatus.Loading;
      })
      .addCase(logOut.fulfilled, state => {
        state.status = fetchStatus.Success;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.status = fetchStatus.Error;
      });
  },
});

export const authReducer = authSlise.reducer;
