import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsInitialState = contacts;

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
    localStorage.setItem('contacts', JSON.stringify(state));
  },
  [removeContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(state));
  },
});

const filterInitialState = { filter: '' };

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => {
    state.filter = action.payload;
  },
});
