import React, { useCallback, useState } from "react";
import Header from "./Header";

function Hook6() {
  const [counter, setCounter] = useState(0);
  const newFn = useCallback(() => {}, []);
  // const newFn = useCallback((counter) => {}, [counter]);
  // const newFn = () => {};

  return (
    <div>
      <h2 className="head">useCallback Hook</h2>
      <Header newFn={newFn} />
      <button
        className="counter-button"
        onClick={() => setCounter(counter + 1)}
      >
        Counter: {counter}
      </button>
    </div>
  );
}

export default Hook6;

//useCallback hook
//This is the hook that lets you cache a function definition between re-renders
//It means when we use useCallback hook, it doesen't create multiple instance of same function when re-render happens
//Instead of creating new instance of te function it provides the cached function on re-render of the component

// Explanation
// So here i have created my component with a counter but also i have imported the header component in which in it i have consoled the message "Header Rendered"
//So when ever i click the counter button i also keep getting the message header rendered so it is also re-rendering the child component even if it is not needed
//So to fix this we can use the memo method when exporting in a child component which comes with react package
// Eg.  export default React.memo(Header);

//But also when i just declare an arrow function and pass it as prop to my Header component that problem of re-rendering when i click counter comes back
//And that is not required because we are not changing anything in the header component

// So what is happening is Example
// you have declared an arrow function dav1 with value Hello and also arrow function dav2 with value Hello also
//If you want to see if their simmiral you gonna get false because both functions have been created in different memory location

//So in the code above when we re-render the component by clicking the counter it creates a new instance of the function const newFn = () => {}; and when we are mounting the header component and passing function as prop
// so every time it changes after re-render the props also changes making the header to also re-render

// We can solve this using the useCallback hook on that instance function
//useCallback takes two arguments the function and the dependency
//So what will happen is that the useCallback will not create another function it will use the catched function instead and the header will not re-render
//So if we pass may be counter and in the function it means when ever the counter changes it will change it will also change the function leading to changing the prop  and causing the header component to re-render
