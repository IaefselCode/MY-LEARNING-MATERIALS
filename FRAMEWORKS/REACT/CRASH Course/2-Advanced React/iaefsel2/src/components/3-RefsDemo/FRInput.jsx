//FORWADING REFS
import React from 'react'

// //Third is fowarding this ref to the input element in the child component
// //We are going to modify how we create the functional component
// function FRInput() {
//     return (
//         <div>
//             <input type="text" className='form-control form-control-lg m-1' />
//         </div>
//     )
// }

//To Forward A Ref we will use the React.forwardRef() method which is assigned to the Constant
const FRInput = React.forwardRef((props, ref) => {
        return (
            <div>
                <input type="text" className='form-control form-control-lg m-1' ref={ref}/>
            </div>
        )
    }
)
//So We Simply Rewrite the Functional Component Using Arrow Function


export default FRInput