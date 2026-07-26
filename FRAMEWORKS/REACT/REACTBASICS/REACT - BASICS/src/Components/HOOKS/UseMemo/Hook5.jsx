import { Button } from "@material-tailwind/react";
import React, { useState, useMemo } from "react";

function Hook5() {
  const [number, setNumber] = useState();
  const [counter, setCounter] = useState(0);

  //   function calculate(num) {
  //     console.log("Calculation Done !!!");
  //     return Math.pow(num, 3);
  //   }

  //   const result = useMemo(() => {return calculate(number)}, [number]);

  const result = useMemo(
    function calculate() {
      console.log("Calculation Done !!!");
      return Math.pow(number, 3);
    },
    [number]
  );

  return (
    <div>
      <h2 className="head">useMemo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="input-field"
        placeholder="Enter Number"
      />
      <h2>The Cubic Result of the number is : {result}</h2>

      <button
        className="counter-button"
        onClick={() => setCounter(counter + 1)}
      >
        Counter: {counter}
      </button>
    </div>
  );
}

export default Hook5;

// The useMemo Hook is the hook that returns a memorized value  (Its like caching a value so that it doesen't need to be recalculated.)
// The useMemo Hook only runs if one its dependencies gets Updated
//This can improve the performance of the application but there is one more hook in react to improve the performance that is useCallback hook
// The Difference between useMemo Hook and useCallback
// useMemo - Returns a memorized value
// useCallback - Returns a memorized function

//Explanation
//So Here There are two components which are the input field in which when you input a number it automatically calculates the cubic of the number and the
//button with a simple counter
//Also a have added consoled the message "Calculation Done !!!"  to see in the problem here
//Its that when ever i press the counter button also the message keeps comming back so whats really happening here is
// we are not inputting the number but it still is calculating the number
//Because when we update the counter it changes the state of the counter and then re-renders the whole COMPONENT and when the webpage is re-rendered
//it is re-calculating the number so these can cause performance issue in big projects

// That Where useMemo comes
//It takes two arguments one is the function or call the function and the second one is dependencies of what we need it not to be re-rendered
