import React, { useState } from 'react'

function UseStateHook1() {
    const initialcount = 0;
    const [count, setCount] = useState(initialcount)
    // const increment5 = () => {
    //     for (let i = 0; i < 5; i++) {
    //         // setCount(count + 1)
    //         setCount(prevCount => prevCount + 1)
    //     }
    // }
    return (
        <div>
            Count: {count}<br></br>
            <button onClick={() => setCount(count + 1)}>INCREMENT</button>
            <button onClick={() => setCount(initialcount)}>Reset</button>
            <button onClick={() => setCount(count - 1)}>DECREMENT</button>
            {/* <button onClick={increment5}>INCREMENT BY 5</button> */}
        </div>
    )
}

export default UseStateHook1

// useState with previousState