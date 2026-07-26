import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

function Event() {

   function Eventer(){
        console.log('Button Clicked !!!')
    }
    return (
        <div>
            <Button className='btn btn-secondary p-3 m-1' onClick={Eventer}>Click Here</Button>
        </div>
    )
}
export default Event