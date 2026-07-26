//And Now we want to add users to the Application so we can credit the posts to their authors 
// But we want to keep this as a separate feature so we want to separate all the logic and data from the post slice
//So the concept is to add the userId to the post  sa as we can look up the username of the post and also give them credit
//So here i get the concept of getting the id or any data from one slice to another
   

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Fake Users Api
const USERS_URL = import.meta.env.VITE_USERS_URL;

export const fetchUsers = createAsyncThunk(
  "posts/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(USERS_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = [
    // { id: '0', name: 'David' },
    // { id: '1', name: 'Elisha' },
    // { id: '2', name: 'Luis' },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.fulfilled, (state, action) => {
          return action.payload;
        });
    },     
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
