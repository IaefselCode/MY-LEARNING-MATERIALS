import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    addcount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 6
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.addcount}>Increase the Number</button><br />
                Counter{this.state.count}
            </div>
        )
    }
}

export default Counter