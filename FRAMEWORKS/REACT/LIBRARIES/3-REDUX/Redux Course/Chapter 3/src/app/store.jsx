import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducers from "../features/Users/usersSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducers,
  },
  devTools: true, // enabled by default
});
