import React, { useState } from 'react'

function ObjectUseState() {
    const [car, setCar] = useState({
        brand: "Toyota",
        model: "Corolla",
        year: 2020,
        color: "blue"
    });

    function  handleYearChange(event) {
        setCar(c => ({...c,year: event.target.value }));
    }
    function handleColorChange(event) {
        setCar(c => ({ ...c, color: event.target.value }));
    }
    function handleBrandChange(event) {
        setCar(c => ({ ...c, brand: event.target.value }));
    }
    function handleModelChange(event) {
        setCar(c => ({ ...c, model: event.target.value }));
    }
    return (
        <>
        <h1 className='head'>Updating Object with useState</h1>
        {/* <p className='para'>Use the input fields to update the car details:</p>
        <p className='para'>You can change the year, color, brand, and model of the car.</p>
        <p className='para'>The car details will be updated in real-time as you type.</p>
        <p className='para'>The car object is managed using the useState hook.</p>
        <p className='para'>The car object contains the following properties: brand, model, year, and color.</p>
        <p className='para'>The car object is initialized with the following values: brand  "Toyota", model "Corolla", year 2020, and color "blue".</p>
        <p className='para'>The car object is updated using the setCar function.</p>
        <p className='para'>The setCar function is called with a new object that contains the updated values.</p>
        <p className='para'>The spread operator is used to copy the existing car object and then update the specific property.</p>
        <p className='para'>The updated car object is then displayed below.</p>  */}
        <p>Your Favourite Car is: {car.year} {car.color} {car.brand} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange} className='input-field'/>
        <input type="text" value={car.color} onChange={handleColorChange} className='input-field'/>
        <input type="text" value={car.brand} onChange={handleBrandChange} className='input-field'/>
        <input type="text" value={car.model} onChange={handleModelChange} className='input-field'/>
        </>
    )
}

export default ObjectUseState

//NOTES
//Updating the state in an Object with useState
//Spreed operator is used to copy the existing state and then update the specific property
//setCar({ ...car, property: newValue }) is the syntax to update a specific property in the object
//In the above code, we are updating the year property of the car object

        
// If we just keep it like this  setCar({year: 2025 }); We are replacing the entire car object with a 
// new object that only has the year property, losing all other properties.
//To avoid this, we use the spread operator to copy the existing car object and then update the specific property.
//For example, setCar({ ...car, year: 2025 }); would update the year while keeping the other properties intact.
//This is a common pattern when working with objects in React state management.

//We are also using the updater function form of setState, which is useful when the new state depends on the previous state.
//This ensures that we are always working with the most up-to-date state, especially in cases