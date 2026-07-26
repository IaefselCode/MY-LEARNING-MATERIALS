import React from 'react'
// import profilepic from '../assets/programmer.jpg'

function Carder(props) {
    return (
        <div className='card'>
            <img src={props.name} alt="Profile Picture" className='card-img'/>
            <h2 className='card-title'>IaefselCode</h2>
            <p className='card-text'>I Learn Computer Science and I am a Software Developer</p>
        </div>
    )
}

export default Carder