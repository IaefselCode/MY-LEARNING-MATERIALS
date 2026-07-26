//useEffect(function, [dependencies]) = React Hook that tells React to run the function

import React, { use, useEffect, useState } from 'react'

function WidthHeight() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  // window.addEventListener('resize', handleResize);
  // console.log("EVENT LISTENER ADDED");

  // THIS IS A BAD PRACTICE
  // It will add an event listener every time the component re-renders, which can lead
  // to memory leaks and performance issues.
  // Instead, we should use useEffect to add the event listener only once when the component mounts.

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log("EVENT LISTENER ADDED");

    //Doing any clean up
    //BY removing the event listener when the component unmounts and a call to the function handleResize
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log("EVENT LISTENER REMOVED");
    }
  }, []); // Empty dependency array means this effect runs only once after the initial render

//You can also add more than on useEffect hooks in a component
useEffect(() => {
  document.title = `Size: ${width} x ${height}`;
}, [width, height]); // This effect runs whenever width or height changes

  function handleResize() {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
  }

  return (
    <>
    <h1 className="head">Height and Widht Of The Screen</h1>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  )
}

export default WidthHeight