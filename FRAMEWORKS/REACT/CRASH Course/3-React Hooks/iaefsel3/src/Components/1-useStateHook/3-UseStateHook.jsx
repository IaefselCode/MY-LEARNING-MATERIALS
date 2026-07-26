import React, { useState } from 'react'

function UseStateHook2() {
    const [name, setName] = useState({ firstname: '', lastname: '' })
    return (
        <div>
            <form>
                {/* Spread Operator (...name) */}
                <input type="text" placeholder='FirstName' value={name.firstname} onChange={e => setName({ ...name,firstname: e.target.value })} />
                <input type="text" placeholder='LastName' value={name.lastname} onChange={e => setName({ ...name,lastname: e.target.value })} />

                <p>Your First Name is - {name.firstname}</p>
                <p>Your Last Name is - {name.lastname}</p>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateHook2

// useState with Objects