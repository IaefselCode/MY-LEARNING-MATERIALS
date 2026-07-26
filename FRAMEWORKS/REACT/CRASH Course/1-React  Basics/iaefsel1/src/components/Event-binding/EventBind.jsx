import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

//First Approach
class Eventbind extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Hello'
        }
        // this.event = this.event.bind(this)
    }

    // event(){
    //     this.setState({
    //         message:'GoodBye!!!' 
    //     })
    //     console.log(this)
    // }

    event = ()=> {
        this.setState({
            message:'GoodBye!!!' 
        })
        // console.log(this)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <Button onClick={this.event}>Click</Button>
            </div>
        )
    }
}
export default Eventbind

//Other All Approaches on Your NoteBook