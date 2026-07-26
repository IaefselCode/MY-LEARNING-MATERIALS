// UseEffsect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//                This component re-renders
//                This component mounts
//                The state of a value

// UseEffect(function, [dependencies]) = React Hook that tells React to run the function
//                                       when the component mounts and when the dependencies change

// 1.useEffect(() => {})//Runs after every re-render
// 2.useEffect(() => {}, [])//Runs only once after the component mounts || Runs only on mount
// 3.useEffect(() => {}, [dependencies])//Runs after every re-render when the dependencies change || Runs on muont + when value changes

// USES
// #1.Event Listeners
// #2.DOM manipulation
// #3.Subscription (real-time updates)
// #4.API calls || Fetching data from an API
// #5.Cleaning up resources || Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function Hook2() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
    console.log(`Count updated to: ${count}`);
    return () => {
      //SOME CLEAN UP CODE
    };
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <h1 className="head">Use Effect Hooks</h1>
      <p style={{ color: color }}>Count: {count}</p>
      <button className="button" onClick={addCount}>
        Add Count
      </button>
      <button className="button" onClick={subtractCount}>
        Subtract Count
      </button>
      <button className="button" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default Hook2;

//So in useEffect there are two parameters
// 1. A function that will run when the component mounts and when the dependencies change
// 2. An array of dependencies that will trigger the function to run when they change
// If the array is empty, the function will only run once when the component mounts
// If the array contains dependencies, the function will run when those dependencies change
// If the array is not provided, the function will run after every re-render
// If you want to run the function only once when the component mounts, you can pass an empty array as the second parameter

// There is Also useLayoutEffect()
// Difference
//useEffect - It is called after printing the DOM Elements
//useLayoutEffect - It is called before printing the DOM Elements
