import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlyce';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
