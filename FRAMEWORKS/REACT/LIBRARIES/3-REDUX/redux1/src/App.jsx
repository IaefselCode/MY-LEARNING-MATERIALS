import { useState } from "react";

import "./App.css";
import AddTodo from "./addTodo";
import { toogleTheme } from "./themeSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  //Theme
  const theme = useSelector((state) => state.theme); //Access the theme state
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toogleTheme());
  };

  const applyStayle = {};
  return (
    <div>
      <button onClick={handleTheme}>
        Switch to {theme === "dark" ? "light" : "dark"} Mode
      </button>
      <h1 className="text-red-500 text-4xl">ToDo List App</h1>
      <AddTodo />
    </div>
  );
}

export default App;

// Redux is mostly used to manage the state of a javascript apk
//Example the CART state in e-commerce website where the user needs to add or reduce number of products CRUD Cart
//Other UserState Which includes authentication user profiles or order history
//Other Product state which includes product details filter options and search criteria among other functionalities

//That is just basics of redux toolkit and there are still more
// eg Redux with data fetching, RTK Query,  and how Middleware works
