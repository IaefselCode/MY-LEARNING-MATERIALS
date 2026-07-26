import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import Lifecycle2 from './Mounting lifecycle2';

class Lifecycle1 extends Component {
    //****MOUNTING LIFECYCLE METHODS****//
    //Constructor
    constructor(props) {
        super(props)
        this.state = {
            name: 'SUDO'
        }
        console.log('lifecycle1 constructor');
        this.changeState = this.changeState.bind(this)
    }

    //getDerivedStateFromProps
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycle1 getDerivedStateFromProps');
        return null
    }

    //componentDidMount
    componentDidMount() {
        console.log('lifecycle1 componentDidMount');
    }

    //Fourth is render mothod already defined

    //****UPDATING LIFE CYCLE METHODS****//
    //First is getDerivedStateFromProps already defined

    shouldComponentUpdate() {
        console.log('lifecycle1 shouldComponentUpdate');
        return true
    }

    //Third is render() already defined

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycle1 getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('lifecycle1 componentDidUpdate');
    }




    changeState = () => {
        this.setState({
            name: 'INVINCIBLE FULL SERIES'
        })
    }




    //render
    render() {
        console.log('lifecycle1 render');
        return (
            <div>
                <h2>return Method lifecycle1</h2>
                <Lifecycle2 />
                <div><h2>{this.state.name}</h2></div>
                <Button className='btn btn-success m-2 p-3' onClick={this.changeState}><h2>Change State</h2></Button>
            </div>
        )
    }
}
export default Lifecycle1