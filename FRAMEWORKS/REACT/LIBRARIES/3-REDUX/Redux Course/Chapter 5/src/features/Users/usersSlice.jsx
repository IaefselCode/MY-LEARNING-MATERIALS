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
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  users: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};
// { id: '0', name: 'David' },
// { id: '1', name: 'Elisha' },
// { id: '2', name: 'Luis' },

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const selectAllUsers = (state) => state.users.users;

export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
// export const selectUserById = (state, userId) =>
//   state.users.users.find(
//     (user) => user.id === userId || String(user.id) === String(userId)
//   );

export const selectUserById = (state, userId) => {
  const id = Number(userId);
  return state.users?.users?.find((user) => user.id === id);
};
//Here we have created selectUserById selector
//Easy we call it selectUserbyId we get the state and the UserId and then we just call the user state here state.users.users and then find on that and we return what matches the user.id to the UserId that we pass in
//After then we export it so as its ready to go and going to import it to the userPage

export default usersSlice.reducer;
