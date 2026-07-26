import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

class Lifecycle2 extends Component {

    //Constructor
    constructor(props) {
        super(props)
        this.state = {
            name: 'SUDO'
        }
        console.log('lifecycle2 constructor');
    }

    //getDerivedStateFromProps
    static getDerivedStateFromProps(props, state) {
        console.log('lifecycle2 getDerivedStateFromProps');
        return null
    }

    //componentDidMount
    componentDidMount() {
        console.log('lifecycle2 componentDidMount');
    }




    //****UPDATING LIFE CYCLE METHODS****//
    //First is getDerivedStateFromProps already defined

    shouldComponentUpdate() {
        console.log('lifecycle2 shouldComponentUpdate');
        return true
    }

    //Third is render() already defined

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycle2 getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('lifecycle2 componentDidUpdate');
    }





    //render
    render() {
        console.log('lifecycle2 render');
        return (
            <div><h2>return Method lifecycle2</h2></div>
        )
    }
}
export default Lifecycle2