import React, { Component } from 'react'

class TheUser extends Component {
  render() {
    return (
      <div>{this.props.render(true)}</div>
    )
  }
}

export default TheUser