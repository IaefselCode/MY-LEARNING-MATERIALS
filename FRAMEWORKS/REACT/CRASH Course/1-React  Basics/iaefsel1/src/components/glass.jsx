import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

export function CSSone() {
    return <div className='glass'><Button className='btn btn-secondary p-3'>TestButton1</Button></div>
}
