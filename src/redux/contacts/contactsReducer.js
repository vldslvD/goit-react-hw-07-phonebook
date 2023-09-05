import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {contactsActions, contactsOperations } from 'redux/contacts'
const { fetchContacts, addContact, deleteContact } = contactsOperations;
const items = createReducer([], {
  [fetchContacts.fulfilled]: (state, action) => {
    return action.payload;
  },
  [addContact.fulfilled]: (state, action) => {
    return [...state, action.payload];
  },
   [deleteContact.fulfilled]: (state, action) => {
    return state.filter(
        contact => contact.id !== action.payload.id
      );
  },
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: (state, action) => {
    return true;
  },
  [fetchContacts.fulfilled]: (state, action) => {
    return false;
  },
  [fetchContacts.rejected]: (state, action) => {
    return false;
  },

  [addContact.pending]: (state, action) => {
    return true;
  },
  [addContact.fulfilled]: (state, action) => {
    return false;
  },
  [addContact.rejected]: (state, action) => {
    return false;
  },
});

const error = createReducer(null, {
  [fetchContacts.pending]: (state, action) => {
    return null;
  },
  [fetchContacts.rejected]: (state, action) => {
    return action.payload;
  },

  [addContact.pending]: (state, action) => {
    return null;
  },
  [addContact.rejected]: (state, action) => {
    return action.payload;
  },
});

export default combineReducers({
  items,
  isLoading,
  error
});