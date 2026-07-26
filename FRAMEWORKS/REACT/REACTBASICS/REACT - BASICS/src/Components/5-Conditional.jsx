import React from 'react'

function Conditional(props) {
    const welcomeMessage = <h2 className='welcome-message'>
        Welcome {props.username}
    </h2>

    const loginprompt = <h2 className='login-prompt'>
        Please Log in to Continue
    </h2>
    return (
        props.isLoggedIn ? welcomeMessage : loginprompt 
    )
}

export default Conditional