import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import Person from './Persons';

// function Namelist() {
//     const names = ['ANNUAL', 'JAJA', 'NGOSHA']
//     const namelist = names.map(name => <h2><b><i>{name}</i></b></h2>)
//     return (
//         <div>
//             {/* <div>Name1 - {names[0]}</div>
//             <div>Name2 - {names[1]}</div>
//             <div>Name3 - {names[2]}</div> */}

//             {namelist}
//         </div>
//     )
// }
// export default Namelist



//More Complicated Example
function Namelist() {
    const names = ['Bruce', 'Clark', 'Diana',];
    const people = [
        {
            id: 1,
            name: 'David',
            age: 19,
            skills: 'Programming',
        },
        {
            id: 2,
            name: 'Anual',
            age: 22,
            skills: 'Networking',
        },
        {
            id: 3,
            name: 'Rashid',
            age: 21,
            skills: 'Network',
        }
    ]

    const personlist = people.map((person) => <Person key={person.id} name={person} />)
    const namelist = names.map((name,index) =>  <h2 key={index}>{index+1} - {name}</h2>)
    return <div>{personlist}<br />
        <h1><u>Index as Key Anti-pattern</u></h1><br />
        {namelist}</div>
}
export default Namelist