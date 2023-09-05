import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, action) => {
      return state.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteContact } =
  contactsSlice.actions;
