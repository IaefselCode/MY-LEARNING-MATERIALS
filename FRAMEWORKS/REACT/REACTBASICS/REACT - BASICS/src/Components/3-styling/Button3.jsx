import React from 'react'

function Button3() {
    const styles = {
        background: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        margin: "2px",
    }
    return (
    <button style={styles}>Click me 3</button>
        
    )
}

export default Button3
//Inline Styles
//Great for components for minimal styling but not the complex projects