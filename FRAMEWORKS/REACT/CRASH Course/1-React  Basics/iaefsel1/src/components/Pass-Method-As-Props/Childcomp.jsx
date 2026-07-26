import React from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

function Child(props) {
    return(
        <div>
            <Button className='btn btn-danger p-3 m-2' onClick={()=>props.name('  DAVID')}>Greet Parent</Button>
        </div>
    )
}
export default Child