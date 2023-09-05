import { createAction } from "@reduxjs/toolkit";

export const fetchContactsPending = createAction('contacts/fetchContactsPending');
export const fetchContactsFullfilled = createAction('contacts/fetchContactsFullfilled');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactPending = createAction('contacts/addContactPending');
export const addContactFullfilled = createAction('contacts/addContactFullfilled');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactPending = createAction('contacts/deleteContactPending');
export const deleteContactFullfilled = createAction('contacts/deleteContactFullfilled');
export const deleteContactError = createAction('contacts/deleteContactError');