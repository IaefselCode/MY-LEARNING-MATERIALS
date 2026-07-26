import React, { Component } from 'react'
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import Davoo from './Davoo'

 class Focusinput extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef()
  }

  clickHandler = () =>{
   this.componentRef.current.Focusinput()
  }

  render() {
    return (
      <div>
        <Davoo ref={this.componentRef} />
        <Button onClick={this.clickHandler}>Focus Input</Button>
      </div>
    )
  }
}

export default Focusinput