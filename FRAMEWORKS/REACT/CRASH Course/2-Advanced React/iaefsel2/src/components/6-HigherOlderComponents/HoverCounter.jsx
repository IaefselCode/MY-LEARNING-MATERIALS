import React, { Component } from 'react'
import WithCounter from './WithCounter'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'

class HoverCounter extends Component {

    render() {
        const {count,incrementCounter} = this.props
        return (
            <div>
                <Button onMouseOver={incrementCounter} className='btn btn-lg m-1'> HOVERED {count} Times</Button>
                <h2 onMouseOver={incrementCounter}>HOVERED {count} times</h2>
            </div>
        )
    }
}

export default WithCounter(HoverCounter,10)