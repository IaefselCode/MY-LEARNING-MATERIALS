import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//REDUX
import { Provider } from "react-redux";
import { store } from "./app/store.jsx";
import { fetchTodo } from "./features/tasksSlice.jsx";

store.dispatch(fetchTodo());

import "spinkit/spinkit.min.css";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // {/* </StrictMode> */}
);
