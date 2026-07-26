import React, { useState } from 'react'

function UseStateHook() {

  const [count, setCount] = useState(0) /***Array Destructuring***/

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Button {count}</button>
    </div>
  )
}

export default UseStateHook

// useState with Object

// hooks
// api
// styling (tailwind css)
// forms
// state management
