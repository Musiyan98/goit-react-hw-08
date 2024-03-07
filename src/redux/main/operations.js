import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';



axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContact = createAsyncThunk('contact/fetchContacts', async (controller, thunkApi) => {
  const signal = controller.signal;
  try {
    const response = await axios.get('/contacts', {signal});
    
    return response.data;
  } catch (error) {
    console.log(thunkApi.rejectWithValue(error))
    return thunkApi.rejectWithValue(error.message);
  }

});

export const addContact = createAsyncThunk('contact/addContact', async (newContact, thunkApi) => {
  try {
    const response = await axios.post('/contacts', newContact);
    return response.data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
