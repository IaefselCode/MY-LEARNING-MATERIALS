import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

class Message extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Subscribe Here !!!'
        }
    }

changeMessage(){
    
    this.setState({
    message: <h1 style={{color:'white', fontFamily:'cooper black'}}>Thank You For Subscribing</h1>
    },
    ()=>{
        console.log('callback value -', this.state.message)
    }
)
    console.log(this.state.message)
}

    render() {
        return (
            <div>
                <h1>Welcome Visitor</h1>      
                 <Button className='btn btn-danger p-3 m-3' onClick={()=> this.changeMessage()}>{this.state.message}</Button>
            </div>
        )
    }
}
export default Message
