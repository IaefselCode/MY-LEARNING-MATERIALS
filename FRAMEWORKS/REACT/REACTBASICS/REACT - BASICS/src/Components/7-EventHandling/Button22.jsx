import React from 'react'
import profilepic from '../../assets/programmer.jpg'

// const handleClick =(e)=> e.target.textContent = "OUCH";
// function Button22() {
//   return (
//     <button className='button' onClick={(e)=>handleClick(e)}>Click me</button>
//   )
// }

// export default Button22

// Here there is the event parameter this is an argument that describes the event that have occured (event) or (e)

//FOR IMAGE
const imageUrl = profilepic;
const handleClick = (e) => e.target.style.display = "none";
function Profilepicture() {
    return (
        <img className='theimg' onClick={(e) => handleClick(e)} src={imageUrl} alt="" />
    )
}

export default Profilepicture