import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

class CEvents extends Component {

    event() {
        return (
            console.log("Haven't I told You Fuck Off !!!!")
        )
    }

    render() {
        return (
            <div>
                <Button className='btn btn-secondary p-3 m-1' onClick={this.event}>Fuck You ????</Button>
            </div>
        )
    }
}
export default CEvents