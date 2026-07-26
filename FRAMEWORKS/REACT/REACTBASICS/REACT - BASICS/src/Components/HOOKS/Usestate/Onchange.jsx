//   Onchange = event handler primarily with form elements
//             export. <input>, <textarea>, select, radio
//             Triggers a function every time the value of the input changes    

import React, { useState } from 'react'

function Onchange() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [deliveryInstructions, setDeliveryInstructions] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [shipping, setShipping] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleDeliveryInstructionsChange(event) {
        setDeliveryInstructions(event.target.value);
    }

    function handlePaymentMethodChange(event) {
        setPaymentMethod(event.target.value);
    }

    function handleShippingChange(event) {
        setShipping(event.target.value);
    }

    return (
        <div>
            <h2>Onchange Handle Event Using useState Hook</h2>
            <label htmlFor="name">Enter your name:</label>
            <input type="text" value={name} onChange={handleChange} className='input-field' id='name' />
            {/* <p>So Your Name Is: {name}</p> */}

            <input type="number" value={quantity} onChange={handleQuantityChange} className='input-field' />
            {/* <p>Quantity: {quantity}</p> */}

            <textarea value={deliveryInstructions} onChange={handleDeliveryInstructionsChange} placeholder='Enter Delivery Instructions' className='input-field'></textarea>
            {/* <p>Comment: {deliveryInstructions}</p> */}

            <select name="" id="" className='input-field' value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="">Select Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastrecard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            {/* <p>Payment: {payementMethod}</p> */}

            <label htmlFor="">
                <input type="radio" value="Pickup" checked={shipping === "Pickup"} onChange={handleShippingChange} />
                Pick up
            </label>
            <label htmlFor="">
                <input type="radio" value="derivery" checked={shipping === "derivery"} onChange={handleShippingChange} />
                Derivery
            </label>
            <div className='summary'>
                <p>Name: {name}</p>

                <p>Quantity: {quantity}</p>

                <p>Comment: {deliveryInstructions}</p>

                <p>Payment: {paymentMethod}</p>

                <p>Shipping: {shipping}</p>
            </div>

        </div>
    )
}

export default Onchange