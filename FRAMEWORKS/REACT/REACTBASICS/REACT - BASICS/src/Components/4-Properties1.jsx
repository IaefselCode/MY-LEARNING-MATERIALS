import React from 'react'
// import PropTypes from 'prop-types'

//props
function Properties1(props) {
    return (
        <div className='student'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/* accessing boolean using ternary operator */}
            <p>Student: {props.isStudent ? "yes" : "no"}</p>

        </div>
    )
}
//PropTypes
// Properties1.PropTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }

//Default prop
Properties1.defaultProps = {
    name:"Guest",
    age:20,
    isStudent:false,
}
export default Properties1



// props - they are read only properties that are shared between components.
//         A parent component can send data to the child component.
//         like key and value <Component key=value/>

// propTypes = a mechanism that ensures that thev passed value is of the correct datatype
//             age:Proptype.number
//Mostly suitable for debuging  proccesses

// defaultprops - are default values for props in case they are not passed from the parent component 
//                name: "Guest"