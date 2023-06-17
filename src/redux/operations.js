import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { axiosUser } from './auth/authOperations';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosUser.get('contacts');
      console.log('data :>> ', data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axiosUser.post('contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact.deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosUser.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeSearchContact = value => ({
  payload: value,
});
