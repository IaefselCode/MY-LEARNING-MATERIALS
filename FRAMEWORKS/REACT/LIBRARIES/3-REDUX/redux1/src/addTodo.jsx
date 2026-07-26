import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";

const AddTodo = () => {
  // Todo
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos); //here am accessing the state using the useSelector hook from redux so i started with a parameter of a state and used dot opperator to access the state named todos in my store
  const dispatch = useDispatch(); //This allows us to use the reducers we use in our slices
  // console.log(todos);//This will return the initial value of the todos state

  //Lets create a function for adding a todo
  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    } else {
      alert("Please Enter Todo");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      {/* displaying the todos  */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="m-2">
            <span className="bg-amber-950 rounded-3xl p-4 m-2">
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
