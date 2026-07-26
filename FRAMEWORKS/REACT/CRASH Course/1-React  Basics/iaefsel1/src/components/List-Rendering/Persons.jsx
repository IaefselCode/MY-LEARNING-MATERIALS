import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

function Person({ name }) {
    return (
        <div>
            <h2><b><i>My Identity is {name.id} My Name is {name.name} My Age is {name.age} I Am Good At {name.skills}</i></b></h2>
        </div>
    )
}
export default Person