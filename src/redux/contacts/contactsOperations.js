//import * as contactsActions from './contactsActions';
import * as contactsAPI from 'contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, {rejectWithValue}) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
    return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, {rejectWithValue}) => {
    try {
      const addedContact = await contactsAPI.addContact(contact);
    return addedContact;
    } catch (error) {
       return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, {rejectWithValue}) => {
    try {
      const deletedContact = await contactsAPI.deleteContact(id);
    return deletedContact;
    } catch (error) {
       return rejectWithValue(error);
    }
  }
);
