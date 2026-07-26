//first step is to import react
import React from 'react';

//Functional Component
function Greet() {
    return <h1 className='text-decoration-underline'>
        Here I Have Created My First Functional Component !!!!!  The Best Animation I Have Ever used in lifed
    </h1>
}
export default Greet

export function Second() {
    return <h2>Named Export</h2>
}

//arrow function
export const greeter = () => <h1 className='mark'>Hellow This Is Arrow Function </h1>
