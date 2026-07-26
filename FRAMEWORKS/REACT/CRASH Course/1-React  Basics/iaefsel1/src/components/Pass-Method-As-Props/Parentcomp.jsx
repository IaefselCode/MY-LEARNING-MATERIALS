import React, { Component } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '/node_modules/bootstrap/dist/js/bootstrap.min.js';
import Child from "./Childcomp";

class Pcomp extends Component {

    constructor() {
        super()
        this.state = {
            parentname: 'MODESTUS'
        }
        // this.greetparent = this.greetparent.bind(this)
    }

    greetparent = (childname) => {
        // alert('Hello  ' + this.state.parentname + childname)
        alert(`Hello ${this.state.parentname} from ${childname}`)
    }
    render() {
        return (
            <div>
                <Child name={this.greetparent} />
            </div>
        )
    }
}
export default Pcomp