import React from 'react';

// const Hello = (props) => {
//    //console.log(props);
//    return (
//       <div>
//          <h1>Hellow {props.name} or {props.heroname}</h1>
//          {props.children}
//       </div>
//    )
// }
// export default Hello


// //Destructuring Props Method 1
// const Hello = ({name,heroname}) => {
//    return (
//       <div>
//          <h1>Hellow {name} or {heroname}</h1>
//       </div>
//    )
// }
// export default Hello


//Destructuring Props Method 2
const Hello = (props) => {
   const {name,heroname} = props
   return (
      <div>
         <h1>Hellow {name} or {heroname}</h1>
      </div>
   )
}
export default Hello