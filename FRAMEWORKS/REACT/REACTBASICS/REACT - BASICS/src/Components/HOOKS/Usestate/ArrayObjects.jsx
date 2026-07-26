//Updating the State of an Array of Objects with useState
import React, { useState } from 'react'

function ArrayObjects() {

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  // Function to add a new car item
  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    };
    setCars(c => [...c, newCar]); // Add new car to the array
  }

  // Function to remove a car item
  function handleRemoveCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  //Function to handle year change
  function handleYearChange(event) {
    setCarYear(event.target.value); // Update the car year state
  }
  //Function to handle make change
  function handleMakeChange(event) {
    setCarMake(event.target.value); // Update the car make state
  }
  //Function to handle model change
  function handleModelChange(event) {
    setCarModel(event.target.value); // Update the car model states
  }

  return (
    <div>
      <h1 className='head'>Updating The State of an Array of Object with useState</h1>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (

          <li key={index}>
            {car.year} - {car.make} - {car.model}
            <button className='button' onClick={() => handleRemoveCar(index)}>Remove</button>
          </li>
           
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange} className='input-field' id="" />
      <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car Make' className='input-field' id="" />
      <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car Model' className='input-field' id="" />
      <button onClick={handleAddCar} className='button'>Add Car</button>
    </div>
  )
}

export default ArrayObjects 