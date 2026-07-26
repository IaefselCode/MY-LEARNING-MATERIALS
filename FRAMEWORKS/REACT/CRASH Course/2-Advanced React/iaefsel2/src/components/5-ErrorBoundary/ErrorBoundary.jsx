import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      haserror: false
    }
  }

  static getDerivedStateFromError(error) {
    return {
      haserror: true
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
    console.log(info)
  }
  render() {

    if (this.state.haserror) {
      return <div>Some Thing Went Wrong IAEFSEL</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary