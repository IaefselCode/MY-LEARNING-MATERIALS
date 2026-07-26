// useContext() = React Hook that allows you to share values
//                between multiple levels of components
//                without passing props throungh each level

// PROVIDER COMPONENT
// 1.import { createContext } from 'react'
// 2.export const MyContext = createContext()
// 3.<MyContext.Provider value={/* some value */}>
//     <child/>{/* children components which can access the portal*/}
//   </MyContext.Provider>

// CONSUMER COMPONENTS
// 1.import { useContext } from 'react'
//   import { MyContext } from './path/to/context/file'
// 2.const value = useContext(MyContext)

//You can use props to pass data down the component tree, but it can get cumbersome
//                when you have to pass props through many levels of components
//Its Also called "prop drilling" and can make your code harder to maintain

import React, { useState, createContext } from "react";
import Hook3b from "./Hook3b";
export const MyContext = createContext();

function Hook3a() {
  const [user, setUser] = useState("Bro");
  return (
    <>
      <h1 className="head">useContext Hooks</h1>
      <div className="border border-white-50 p-5">
        Component A<h2>{`Hello ${user}`}</h2>
        <MyContext.Provider value={user}>
          {/* You can use the MyContext.Provider to pass down the user value */}
          {/* Here Mycontext.Provider Wrapped all the components which can access the portal */}
          <Hook3b />
          {/* <Hook3b name={user} /> */}
        </MyContext.Provider>
        {/* Or you can pass the user value directly as a prop */}
      </div>
    </>
  );
}

export default Hook3a;

// Simple Explanation
// To create a portal we use the createContext(); function
// And To make that portal available throught all our components we wrap the component with the provider component
// <MyContext.Provider>
// <Hook3b/>
// <MyContext.Provider/>

// We then place the data inside the provider
// <MyContext.Provider value={user}>
// <Hook3b/>
// <MyContext.Provider/>

// IN OTHER COMPONENTS
// To open the portal we use the useContext Hook
// useContext();
// Then we pass the name of the portal we want to use to useContext
// useContext(MyContext);
//  Store the results in the variable and then use that variable in the component
// const user = useContext(MyContext);


// It Makes it easier for you to share things like user details themes or login status
// Its also works well with other hooks like useReducer a central place to store your state its like a more relaxed version of redux