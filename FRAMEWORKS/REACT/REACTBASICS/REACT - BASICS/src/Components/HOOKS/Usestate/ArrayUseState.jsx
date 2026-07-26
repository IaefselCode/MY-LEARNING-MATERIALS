import React, { useState } from 'react'

function ArrayUseState() {
    const [Foods, setFoods] = useState(["apple", "banana", "orange", "grapes", "mango"]);

    // Function to add a new food item
    function handleAddFood() {
        if (document.getElementById('FoodInput').value === '') {
            alert("Please enter a food name");
            return false; // Exit the function if input is empty
        } else {
            const newFood = document.getElementById('FoodInput').value;
            document.getElementById('FoodInput').value = ''; // Clear input field
            setFoods(F => [...F, newFood])
        }
    }

    // Function to remove a new food item
    function handleRemoveFood(index) {
        setFoods(Foods.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h1 className='head'>Updating Array with useState</h1>
            <h2>List of Foods</h2>
            <ul>
                {Foods.map((food, index) => (
                    <li key={index}>{food}<button className='button' onClick={() => handleRemoveFood(index)}>Remove</button></li>
                ))}
            </ul>
            <input type="text" id='FoodInput' placeholder='Enter Food Name' className='input-field' />
            <button className='button' onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default ArrayUseState

//NOTES
//Updating the state in an Array with useState
//Need to be familiar with map method to iterate over the array
//Also need to be familiar with the spread operator to add new items to the array
//setFoods([...Foods, newFood]) is the syntax to add a new item to the
// Also Updater function is used to update the state in an array

//Also, if you want to remove an item from the array, you can use the filter method
//setFoods(Foods.filter((food, index) => index !== indexToRemove)) is the syntax to remove an item from the array
//In the above code, we are adding a new food item to the Foods array

// in handleRemoveFood function there gonna be one paramenter that is the index of the item to be removed
//Underscore(_) is used when the parameter is not used in the function or Ignored