// Updater function = A function passed as an argument to MediaStreamAudioDestinationNode() usually
//                    export. setYear(arrow function)
//                    Allows for safe updates based on the previous state
//                    Used with multiple state updates and asnchronous functions
//                    Good practice to use updater function

import React, { useState } from "react";

function Updaterfunction() {
  // Uses the CURRENT state to calculate the NEXT state.
  // set functions do not triger an update
  // React batches together state updates for performance reasons.
  // NEXT state becomes the CURRENT state after an update.
  //So this is what react does when you dont use updater function
  // eg.setCount(0 + 1);
  //     setCount(0 + 1);
  //     setCount(0 + 1);

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    console.log("Increment Button Clicked");
  };

  const decrementCount = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    console.log("Decrement Button Clicked");
  };

  const resetCount = () => {
    setCount((c) => 0);
    console.log("Reset Button Clicked");
  };

  return (
    <>
      <div className="counter-container">
        <h3 className="title3">Updater Function </h3>
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
    </>
  );
}

export default Updaterfunction;
