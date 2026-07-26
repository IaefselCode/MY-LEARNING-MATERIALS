import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";
// import { nanoid } from 'nanoid';


const POSTS_URL = import.meta.env.VITE_POSTS_URL;

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date)
});

const initialState = postsAdapter.getInitialState({
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0
});

// const initialState = {
//   posts: [],
//   status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
//   count: 0
// };

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
      return err.message;
      // return initialPost; //Only for testing Redux
    }
  }
);

//Delete Post Thunk
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
      const { postId, reaction } = action.payload; //Here means the postId and rection to look up in the action.payload
      // const existingPost = state.posts.find((post) => post.id === postId);
      const existingPost = state.entities[postId]
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    incrementCounter(state, action) {
      // state.count++;
      state.count = state.count + 1;
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
          // post.content = post.body;
          return post;
        });

        //Add any fetched posts to the array
        // state.posts = state.posts.concat(loadedPosts);
        // state.posts.push(...loadedPosts);

        // postsAdapter crud methods
        postsAdapter.upsertMany(state, loadedPosts)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        // action.payload from rejectWithValue or fallback to error
        state.error = action.payload || action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // Fix for API post IDs: API returns id of 101 for all new posts
        action.payload.id = action.payload.id || nanoid();
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsup: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        console.log(action.payload.id);

        // state.posts.push(action.payload);

        // postsAdapter crud methods
        postsAdapter.addOne(state, action.payload)
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          //Here we are getting some information back here with action payload but it could have a successful post assentially a post that is not rejected as a promise but it might not have a status to 100 it might not have completed the update
          console.log("Update Could Not Complete"); //So the server sends a status code of 500 an error
          console.log(action.payload);
          return;
        } else {
          // const { id } = action.payload;
          action.payload.date = new Date().toISOString();

          // Normalize body to content to match local posts structure
          if (action.payload.body && !action.payload.content) {
            action.payload.content = action.payload.body;
          }
          // Ensure userId is a number
          action.payload.userId = Number(action.payload.userId);
          // const posts = state.posts.filter((post) => post.id !== id);

          // state.posts = [...posts, action.payload];

          // postsAdapter crud methods
          postsAdapter.upsertOne(state, action.payload)
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log("Delete Could Not Complete");
          console.log(action.payload);
          return;
        } else {
          // const { id } = action.payload;
          const id = action.payload.id; //Also of you do not want to destructure it you could just say action.payload.id
          // const posts = state.posts.filter((post) => post.id !== id);
          // state.posts = posts;

          // postsAdapter crud methods
          postsAdapter.removeOne(state, id)

        }
      });
  },
});


//*Selectors 
// export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

// export const selectPostById = (state, postId) =>
//   state.posts.posts.find(
//     (post) => post.id === postId || String(post.id) === String(postId)
//   );

// postsAdapter Selector
//getSelector creates these selectors and we rename them with alieses using ES6 destructuring so they match up with our pre existing code
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds //And then to just stick with that naming convertion we gonna say selectByIds
  //Pass in selector that returns the posts slice of state
} = postsAdapter.getSelectors(state => state.posts);

//cannot got on top of selectAllPosts
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.userId === userId)
)

export const getCount = (state) => state.posts.count;// Now Action creator functions are automatically created when we put a reducer in the createSlice
//So after then we can move postAdded and then add incrementCounter to the actions and then we can use them in our components



export const { reactionAdded, incrementCounter } = postsSlice.actions; // Here we are exporting the actions so we can use them in our components
export default postsSlice.reducer; // Here we are exporting the reducer so we can use it in our store
