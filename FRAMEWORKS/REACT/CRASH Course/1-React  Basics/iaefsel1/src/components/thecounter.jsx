import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

class Count extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Count: 0
        }
    }

    increment() {
        // this.state.Count = this.state.Count + 1
        // this.setState({
        //     Count: this.state.Count + 1
        // },
        //     () => {
        //         console.log('callback value', this.state.Count)
        //     }
        // )
         

        this.setState(prevState => ({
            Count:prevState.Count + 1
        }))
        console.log(this.state.Count);
    }

    incremenfive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.Count}</div>
                <div><Button className='btn m-1' onClick={() => this.increment()}>Increment</Button></div>
                <div><Button className='btn m-1' onClick={() => this.incremenfive()}>Increment FIVE</Button></div>                
            </div>
        )
    }
}
export default Count