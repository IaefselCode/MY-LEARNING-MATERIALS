import React, { Component } from 'react'
import WithCounter from './WithCounter'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

class ClickCounter extends Component {

    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <Button className='btn btn-lg m-1' onClick={incrementCounter}>{this.props.names} CLICKED {count} times</Button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,5)  