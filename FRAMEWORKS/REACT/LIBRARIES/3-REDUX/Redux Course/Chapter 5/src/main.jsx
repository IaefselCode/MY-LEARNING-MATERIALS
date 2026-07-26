import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import Routes from "./app/Routes.jsx";

// //REDUX
import { store } from "./app/store.jsx";
import { Provider } from "react-redux";
import { fetchUsers } from "./features/Users/usersSlice.jsx";
import { fetchPosts } from "./features/posts/postsSlice.jsx";

//Spinkit
import "spinkit/spinkit.min.css";

//Dispatching fetchUsers so that users are available throughout the app
//We also need to do that for posts So that they are displayed immediately at the upload
//So when we display like single post page when we refresh it it should still have the post and we also gonna chage it in our postsList
//we are going to remove fetchPost , useDispatch and useEffect 

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <Routes/>
  </Provider>
  // </StrictMode>,
);
