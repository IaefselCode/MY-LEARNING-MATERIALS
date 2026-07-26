import React from 'react'
import { Link } from 'react-router-dom'


function NotFoundPage() {
    // const NotFoundPage =()=>{

    return (
        <div>
            <h1 className='text-black'>Page NotFound❌</h1>
            <Link to={"/"}>
                <button>GO Back Home</button>
            </Link>
            <button onClick={() => history.back()}>GO to Previous</button>
        </div>

    )
    // }
}


export default NotFoundPage


// As You Can See I have Used <Link> but not <a>
// They All Do The Same thing But the Difference is just "link" is faster than "a" tag
// Because <a> reloads the entire component while link the navigation will be instantaneous. 