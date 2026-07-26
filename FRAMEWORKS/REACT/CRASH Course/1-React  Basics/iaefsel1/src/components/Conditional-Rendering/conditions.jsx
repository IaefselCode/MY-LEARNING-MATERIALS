import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';

class User extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedin: true
        }
    }
    render() {
        //**first condition approach <If/Else>**
        // if(this.state.isLoggedin){
        //        return <h1>Welcome Iaefsel</h1>
        // }else{
        //     return <h2>Welcome Guest</h2>
        // }

        //**Second Condition Approach <Element Variables>**
        // let message
        // if(this.state.isLoggedin){
        //     message = <div><h1>Welcome Iaefsel</h1></div>
        // }else{
        //     message = <div><h2>Welcome GUEST</h2></div>
        // }
        // return <div>{message}</div>

        //**Third Condition Approach <Ternary Conditional Operator>**
        // return (
        //     this.state.isLoggedin ?
        //         <div><h1><mark>Welcome Iaefsel</mark></h1></div> :
        //         <div><h2><mark>Welcome Guester</mark></h2></div>
        // )

        //**Fourth Condition Approach <Short Circuit Operator>**
        return (
            this.state.isLoggedin && <div><h1><mark>Welcome Iaefsel</mark></h1></div>
        )
    }
}
export default User