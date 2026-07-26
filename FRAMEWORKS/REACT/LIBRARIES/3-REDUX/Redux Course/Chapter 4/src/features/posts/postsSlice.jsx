import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";

const POSTS_URL = import.meta.env.VITE_POSTS_URL;

const initialState = {
  posts: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Fetch Posts Thunk
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(POSTS_URL);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Adding New Post Thunk
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (initialPost, { rejectWithValue }) => {
    try {
      const response = await axios.post(POSTS_URL, initialPost);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

//update Post Thunk
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (initialPost) => {
    //So here we are sending in initialPost data and we are destructuring and giving id from that initialPost because we need the id in the URL as we send this Update to the API
    const { id } = initialPost; //simple destructuring
    // const id = initialPost.id; //It can also be like this
    try {
      const response = await axios.put(`${POSTS_URL}/${id}`, initialPost); //Here we are using axios.put the initialPost to update the POSTS_URL with the Specific id that we pass in
      return response.data;
    } catch (err) {
      // return err.message;
      return initialPost; //Only for testing Redux
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (initialPost) => {
    const { id } = initialPost;
    try {
      const response = await axios.delete(`${POSTS_URL}/${id}`);
      if (response?.status === 200) {
        // if (response?.statusText === 'OK') {
        return initialPost;
      } else {
        return `${response?.status} : ${resonse?.statusText}`;
      }
    } catch (err) {
      return err.message;
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    // postAdded: {
    //   reducer: (state, action) => {
    //     state.posts.push(action.payload);
    //   },
    //   prepare: (title, content, userId) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         content,
    //         date: new Date().toISOString(),
    //         userId,
    //         reactions: {
    //           thumbsup: 0,
    //           wow: 0,
    //           heart: 0,
    //           rocket: 0,
    //           coffee: 0,
    //         },
    //       },
    //     };
    //   },
    // },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";

        // Add date, normalize body -> content, and add reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsup: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          // normalize property to match local posts
          post.content = post.body;
          return post;
        });

        state.posts = state.posts.concat(loadedPosts);
        // state.posts.push(...loadedPosts);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        // action.payload from rejectWithValue or fallback to error
        state.error = action.payload || action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Fix for API post IDs: API returns id of 101 for all new posts
        action.payload.id = nanoid();
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsup: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        console.log(action.payload);
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          //Here we are getting some information back here with action payload but it could have a successful post assentially a post that is not rejected as a promise but it might not have a status to 100 it might not have completed the update
          console.log("Update Could Not Complete"); //So the server sends a status code of 500 an error
          console.log(action.payload);
          return;
        } else {
          const { id } = action.payload;
          action.payload.date = new Date().toISOString();
          // Normalize body to content to match local posts structure
          if (action.payload.body && !action.payload.content) {
            action.payload.content = action.payload.body;
          }
          // Ensure userId is a number
          action.payload.userId = Number(action.payload.userId);
          const posts = state.posts.filter((post) => post.id !== id);
          state.posts = [...posts, action.payload];
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete Could Not Complete");
          console.log(action.payload);
          return;
        } else {
          const { id } = action.payload;
          const posts = state.posts.filter((post) => post.id !== id);
          state.posts = posts;
        }
      });
  },
});
export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const selectPostById = (state, postId) =>
  state.posts.posts.find(
    (post) => post.id === postId || String(post.id) === String(postId)
  );

export const { postAdded, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
// ...existing code...
