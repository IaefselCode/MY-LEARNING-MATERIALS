import React, { Component } from 'react'
import RegularComponent from './RegularComponent';
import ThePureComponent from './ThePureComponent';
import MemoComponent from './MemoComponent';


class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            thename: '  IAEFSEL'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                thename: 'IAEFSEL'
            })
        }, 2000);
    }

    render() {
        console.log("*******Parent Component**********")
        return (
            <div>
                <div>ParentComponent</div> z
                {/* <MemoComponent name={this.state.thename}/>
                <RegularComponent name={this.state.thename}></RegularComponent>
                <ThePureComponent name={this.state.thename}></ThePureComponent> */}
            </div>
        )
    }
}

export default ParentComponent