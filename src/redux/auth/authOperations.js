import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const axiosUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    axiosUser.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosUser.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'users/signup',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosUser.post('users/signup', user);
      token.set(data.token);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.status);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunkAPI.rejectWithValue('No token');
    }
    try {
      token.set(persistToken);
      const { data } = await axiosUser.get('users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'users/login',
  async (user, thunkAPI) => {
    try {
      const res = await axiosUser.post('/users/login', user);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosUser.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
