import React, { PureComponent } from 'react'

class ThePureComponent extends PureComponent {
  render() {
    console.log("ThePureComponent")
    return (
      <div>ThePureComponent{this.props.name}</div>
    )
  }
}

export default ThePureComponent