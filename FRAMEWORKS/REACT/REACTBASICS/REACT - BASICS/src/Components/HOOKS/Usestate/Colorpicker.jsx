import React, { useState } from 'react'

function Colorpicker() {
    const [color, setColor] = useState('#ffffff');

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className='continer:sm: block border-1 border-white border-solid items-center justify-center rounded-lg p-3 m-2'>
            <h1 className='text-3xl font-bold underline m-5'>Color Picker</h1>
            <div className="flex items-center justify-center  w-100% h-70 rounded-md transition-all delay-75" style={{ backgroundColor: color }}>
                <p>Selected color: {color}</p>
            </div>
            <label htmlFor="">Select color</label><br />
            <input type="color" name="" id="" value={color} onChange={handleColorChange} className='h-10 w-20' />
        </div>
    )
}

export default Colorpicker 