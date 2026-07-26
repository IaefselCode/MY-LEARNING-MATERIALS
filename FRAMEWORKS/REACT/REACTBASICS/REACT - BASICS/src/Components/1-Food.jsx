 import React from 'react'
 
 function Food() {

    const food1 = "orange";
    const food2 = "apple";


   return (
     <div>
        <ul>
            <li>Banana</li>
            <li>{food1.toUpperCase()}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
     </div>
   )
 }
 
 export default Food