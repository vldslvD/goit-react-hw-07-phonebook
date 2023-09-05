import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { contactsFilter } = filterSlice.actions;

export const getFilter = state => state.filter;
