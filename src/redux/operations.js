import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64b9697d79b7c9def6c1012b.mockapi.io/phonebook';

export const fetchContacts = createAsyncThunk(
  'contacts/',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// const fetchContacts = async () => {
//   try {
//     const response = await axios.get('/contacts');
//     // console.log(response.data);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchContacts();
// const addContact = async contact => {
//   try {
//     // console.log(contact);
//     const postResponse = await axios.post('/contacts', contact);
//     console.log(postResponse);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// addContact({ name: 'michal mazur', phone: '34567' });
// export const deleteContact = async id => {
//   try {
//     const deleteResponse = await axios.delete(`/contacts/${id}`);
//     console.log(deleteResponse.data);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// deleteContact(13);
