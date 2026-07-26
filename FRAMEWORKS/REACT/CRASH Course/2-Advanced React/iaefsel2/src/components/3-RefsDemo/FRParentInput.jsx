//FORWADING REFS
import React, { Component } from 'react'
import FRInput from './FRInput'
import { Button } from 'react-bootstrap'

class FRParentInput extends Component {
//first step
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  clickHandler = () =>{
    this.inputRef.current.focus()
  }
render() {
  return (
    <div>
      {/* Second to attach the ref  to the child component using the ref Attribute */}
      <FRInput ref={this.inputRef}></FRInput>
      <Button className='btn btn-lg m-1' onClick={this.clickHandler}>The Focus Input</Button>
    </div>
  )
}
}

export default FRParentInput
