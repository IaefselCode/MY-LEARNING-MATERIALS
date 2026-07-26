import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("");

  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Set Amount to Increase
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </>
  );
};

export default Counter;

//DOCUMENTATION
//So I this chapter i have learned how to setup redux toolkit and how it works
//I have also learned dealing with action.payload

// Eg. <button onClick={() => dispatch(incrementByAmount(addValue))}>Set Amount</button>
//Here we have the button which it onclick access the dispatch that is used to access the actionss in our 'counterSlice' but it also have parameter so
//i am going to start it with an arrow function and then it parameter is incrementByAmount() which is the action in our 'counterSlice'
// and pass addValue as a parameter which is the payload
