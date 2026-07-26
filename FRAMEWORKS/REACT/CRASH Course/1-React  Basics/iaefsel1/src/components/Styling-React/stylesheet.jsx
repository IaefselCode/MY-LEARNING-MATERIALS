import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import './css/thestyle.css'

function Stylesheet(props) {
    let prime = props.primary ? 'davo' : ''
    const inline = {
        fontSize:'60px',
        color:'blue'
    }
    return (
        <div>
           <div className={`${prime} davi`}>Style Sheet</div>
           <div style={inline}>Inline StyleSheet</div>
        </div>
    )
}
export default Stylesheet
