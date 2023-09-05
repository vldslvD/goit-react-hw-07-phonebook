import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from 'redux/contacts';
const { fetchContacts, addContact, deleteContact } = contactsOperations;

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {...state, items: state.items.filter(contact => contact.id !== action.payload.id)};
      })
      
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null },
//   extraReducers: {
//     'qwe/fulfilled': (state, action) => {
//       state.contacts.items = action.payload;
//     },
//     [addContact.fulfilled]: (state, action) => {
//       state.items.push(action.payload);
//     },
//     [deleteContact.fulfilled]: (state, action) => {
//       return state.items.filter(contact => contact.id !== action.payload.id);
//     },
//     [fetchContacts.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//      state.isLoading = false;
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       state.isLoading = false;
//     },

//     [addContact.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [addContact.fulfilled]: (state, action) => {
//       state.isLoading = false;
//     },
//     [addContact.rejected]: (state, action) => {
//       state.isLoading = false;
//     },
//     [fetchContacts.pending]: (state, action) => {
//       state.error = null;
//     },
//     [fetchContacts.rejected]: (state, action) => {
//       state.error = action.payload;
//     },

//     [addContact.pending]: (state, action) => {
//       state.error = null;
//     },
//     [addContact.rejected]: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });
