import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

// const contactsInitialState = contacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        // localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
      // localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
