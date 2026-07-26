import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  //The first two posts gona be unknown author because our initial state doesent even provide userId
  // {
  //   id: "1",
  //   title: "Learning Redux Toolkit",
  //   content:
  //     "I have good experience i state management for javascript applications using Redux Toolkit",
  //   date: sub(new Date(), { minutes: 10 }).toISOString(),
  //   reactions: {
  //     thumbsup: 0,
  //     wow: 0,
  //     heart: 0,
  //     rocket: 0,
  //     coffee: 0,
  //   },
  // },
  // {
  //   id: "2",
  //   title: "Slices...",
  //   content:
  //     "When I say a SLICE It doesent meen a pissa slice but they carry features of the app and not just the app i mean the specific featuer of the app like adding new card can be done by Its slice",
  //   date: sub(new Date(), { minutes: 5 }).toISOString(),
  //   reactions: {
  //     thumbsup: 0,
  //     wow: 0,
  //     heart: 0,
  //     rocket: 0,
  //     coffee: 0,
  //   },
  // },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  // reducers: {
  //     postAdded: (state,action) => {
  //         state.push(action.payload)
  //     },
  // },

  // *** or ***

  // reducers: {
  //     postAdded(state,action){
  //         state.push(action.payload)
  //     },
  // },

  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(), //........>>> - So this one provides a reducer and a prepare callback
            title, //for our postAdded reducer function
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsup: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;

//As we know that react desent want to update the state by just pushung the value to an array but redux toolkit allows even without using
//Spread Operator

//SO THE DISPATCH and SELECTOR PARAMETERS can start from the slice it self so as we don't duplicate logic to every other state
//The STRUCTURE of the STATE for PostList and AddPostForm It is all handled inside the slice