import React, { Component } from 'react'
import { UserConsumer } from './User-Context'

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {
            ( username) =>{
return <div>Hellow {username }</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF