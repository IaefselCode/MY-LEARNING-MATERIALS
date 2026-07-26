//And Now we want to add users to the Application so we can credit the posts to their authors 
// But we want to keep this as a separate feature so we want to separate all the logic and data from the post slice
//So the concept is to add the userId to the post  sa as we can look up the username of the post and also give them credit
//So here i get the concept of getting the id or any data from one slice to another
   

import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: '0', name: 'David' },
    { id: '1', name: 'Elisha' },
    { id: '2', name: 'Luis' },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
