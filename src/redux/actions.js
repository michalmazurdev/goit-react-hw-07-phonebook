import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const removeContact = createAction(
  'contacts/removeContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const setFilter = createAction('filter/setFilter', phrase => {
  return {
    payload: phrase,
  };
});
