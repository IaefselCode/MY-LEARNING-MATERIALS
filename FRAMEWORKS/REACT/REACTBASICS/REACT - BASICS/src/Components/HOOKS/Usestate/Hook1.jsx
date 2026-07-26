// React Hooks => Special functions that allows functional components
// to use Reactfeatures without writing class class components <React v16.8>
// (useState, useEffect, useContext, useReducer ,useCallback , and more)

// useState() = A React hook that allows the creation of a stateful variable AND A
//              setter function to update its value in the Virtual DOM

//Using them you need to know array destructuring
//You can pass in the initial state "name" as an argument in the useState() Hook
import React, { useState } from "react";

function Hook1() {
  const [name, setName] = useState("  ????");
  const [age, ageSet] = useState(0);
  const [isEmployed, setisEmployed] = useState(false);
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const updatename = () => {
    setName(prompt("Enter your name"));
  };

  const increaseAge = () => {
    ageSet(age + 1);
  };

  const toggleemployedstatus = () => {
    setisEmployed(!isEmployed);
  };

  //The Project

  return (
    <div>
      <h2 className='title'>useState</h2>
      <p>Name: {name}</p>
      <button className="button" onClick={updatename}>
        Set Name
      </button>
      <p>Age: {age}</p>
      <button className="button" onClick={increaseAge}>
        Set Age
      </button>
      <p>Employed: {isEmployed ? "Yes" : "No"}</p>
      <button className="button" onClick={toggleemployedstatus}>
        Employed Status
      </button>

      <div className="counter-container">
        <h3 className="title3">Simple Counter Using useState Hook </h3>
        <p className="counter-display">{count}</p>
        <div className="container2">
          <button className="counter-button" onClick={incrementCount}>
            INCREASE
          </button>
          <button
            className="counter-button"
            onClick={resetCount}
            disabled={count === 0}
          >
            RESET
          </button>
          <button
            className="counter-button"
            onClick={decrementCount}
            disabled={count === 0}
          >
            DECREASE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hook1;
