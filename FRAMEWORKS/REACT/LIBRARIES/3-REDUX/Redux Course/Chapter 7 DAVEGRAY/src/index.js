import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
// import { fetchPosts } from './features/posts/postsSlice';
import { extendedApiSlice } from './features/posts/postsSlice';
import { fetchUsers } from './features/users/usersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// store.dispatch(fetchPosts());
store.dispatch(extendedApiSlice.endpoints.getPosts.initiate()); //This is the way to fetch the posts from the API using the extendedApiSlice which is a custom hook that we created in the postsSlice.js file which is a custom hook that we created in the postsSlice.js file where we are using the apiSlice.injectEndpoints function to inject the endpoints into the store
store.dispatch(fetchUsers()); //This is the way to fetch the users from the API using the fetchUsers function that we created in the usersSlice.js file
// Up here they only are dispatching when the app is loaded, we can also dispatch the actions when the user clicks a button or something like that

// console.log(store.getState()); //This is the way to get the state of the store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
