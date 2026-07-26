// import React, { Component } from 'react'

// class Search extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             search: ''
//         }
//     }

//     changesearch = (event) => {
//         this.setState({ search: event.target.value })
//     }

//     render() {
//         const { search } = this.state
//         return (
//             <div>
//                 <input type="text" className='input' value={search} onChange={this.changesearch} placeholder='Search Here !!!' />
//                 <h5>{event.target.value}</h5>
//             </div>
//         )
//     }
// }

// export default Search

import React, { useState } from 'react'

function Search() {
    const [Search, setSearch] = useState('')
    const handleChange = (event) => {
        setSearch(event.target.value);
    };
    return (
        <div>
            <input type="text" className='input' value={Search} onChange={handleChange} placeholder='Search Here !!!' />
            <h5>{Search}</h5>
        </div>
    )
}

export default Search