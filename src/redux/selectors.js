// selectContacts експортуємо в AddContactr.js

import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = state => state.contacts.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilter = createSelector(
  [selectContacts, selectFilteredContacts],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(filter.toLowerCase().trim())
    );
  }
);
