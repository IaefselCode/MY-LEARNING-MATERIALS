import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
};

export const fetchTodo = createAsyncThunk(
  "tasks/fetchTodo",
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      return responce.data.map((task) => ({
        id: task.id,
        title: task.title,
        description: "",
        status: task.completed ? "Completed" : "To Do",
      }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // addTask: (state, action) => {
    //         state.tasks.push(action.payload);
    //       },
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (title, description, status) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            status,
          },
        };
      },
    },
    editTask: {
      reducer: (state, action) => {
        // const { id, title, description, status } = action.payload;
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      },
    },
    deleteTask: {
      reducer: (state,action)=>{
        state.tasks =state.tasks.filter(task => task.id !== action.payload)
      }
    }
  },
  extraReducers: (builder) => {
    //In here we have three states pending ,fulfilled and rejected
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const allTasks = (state) => state.tasks.tasks;
export const getLoading = (state) => state.tasks.loading;
export const getError = (state) => state.tasks.error;

export const { addTask, editTask , deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;

// NOTE
// reducers - Inside of our slice
// extraReducers - Outside of our slice
