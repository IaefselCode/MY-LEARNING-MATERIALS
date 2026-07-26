import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './User-Context'

class ComponentE extends Component {

  static contextType = UserContext

  render() {
    return (
      <div> 
        Component2 context {this.context}
        <ComponentF />
      </div>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE