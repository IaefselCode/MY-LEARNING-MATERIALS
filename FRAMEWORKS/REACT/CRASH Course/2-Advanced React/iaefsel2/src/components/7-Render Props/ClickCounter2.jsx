import React, { Component } from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'


class ClickCounter2 extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return { count: prevState.count + 1 }
    //     })
    // }

    render() {
        const { count,incrementCount } = this.props
        return (
            <div>
                <Button onClick={incrementCount}>Clicked {count} Times</Button>
            </div>
        )
    }
}

export default ClickCounter2