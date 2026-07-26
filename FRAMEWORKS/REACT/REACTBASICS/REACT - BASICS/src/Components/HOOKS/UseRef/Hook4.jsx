//   useState() = Re-renders the component when the state value changes

//   useRef() = Does not re-render the component when the value changes
//   useRef() = Returns a mutable object with a .current property

//   useRef() = "use Reference" Does not cause re-renders when its value changes.
//              When you want a component to "remember" some information,
//              but you don't want that information to trigger new renders.

//              1.Accessing/Interacting with DOM elements
//              2.Handling Focus, Animations, and Transitions
//              3.Managing Timers and Intervals

//  when you use useRef it returns an object with one property of
//   current that current property can store a value,array,object or
//   html element when the stored value changes it doesent cause the
//   component to re-render hence helping in animations,focus and transitions
//   Hence helping in Accessing/Interacting with DOM element

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

function Hook4() {
  // let [number, setNumber] = useState(0);
  const ref = useRef(0);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef();

  useEffect(() => {
    console.log("COMPONENT RENDERED ");
    console.log(inputRef1);
  });

  function handleClick1() {
    //     ref.current++;
    //     // setNumber(n => n + 1);
    //     console.log("Button clicked", ref.current);

    inputRef1.current.focus();
    inputRef1.current.style.borderColor = "red";
    inputRef2.current.style.borderColor = "";
    inputRef3.current.style.borderColor = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.borderColor = "red";
    inputRef1.current.style.borderColor = "";
    inputRef3.current.style.borderColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.borderColor = "red";
    inputRef1.current.style.borderColor = "";
    inputRef2.current.style.borderColor = "";
  }

  function handleClick4() {
    console.log(inputRef4.current);
    inputRef4.current.style.backgroundColor = "blue";
    inputRef4.current.style.borderColor = "blue";
  }

  return (
    <div>
      <h1 className="head">useRef Hooks</h1>
      <button className="button" onClick={handleClick1}>
        {" "}
        Click Me 1?{" "}
      </button>
      <input
        type="text"
        className="input-field"
        name=""
        id=""
        ref={inputRef1}
      />

      <button className="button" onClick={handleClick2}>
        {" "}
        Click Me 2?{" "}
      </button>
      <input
        type="text"
        className="input-field"
        name=""
        id=""
        ref={inputRef2}
      />

      <button className="button" onClick={handleClick3}>
        {" "}
        Click Me 3?{" "}
      </button>
      <input
        type="text"
        className="input-field"
        name=""
        id=""
        ref={inputRef3}
      />

      <button className="button" onClick={handleClick4}>
        {" "}
        Click Me 4?{" "}
      </button>
      <input
        type="text"
        className="input-field"
        name=""
        id=""
        ref={inputRef4}
      />
    </div>
  );
}

export default Hook4;

//NOTE
// useRef Creates a current object in the browser console so to access the properties you must use .current
//useRef is most suitable for accessing the DOM Element using the "ref" propertie

