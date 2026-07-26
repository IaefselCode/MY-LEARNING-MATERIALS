// import React from "react";

// const UpdatedComponent = (OriginalComponent) => {
//   class NewComponent extends React.Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//           count: 0
//       }
//   }

//   incrementCounter = () => {
//       this.setState(prevState => {
//           return { count: prevState.count + 1 }
//       })
//   }

//     render() {
//       return (
//         <div>
//           <OriginalComponent name='IAEFSEL'count={this.state.count} incrementCounter={this.incrementCounter}/>
//         </div>
//       )
//     }
//   }
//   return NewComponent
// }

// export default UpdatedComponent





// // LETS MAKE THEM THE SAME
// import React from "react";

// const WithCounter = (WrappedComponent) => {
//   class Withcounter extends React.Component {

//     constructor(props) {
//       super(props)

//       this.state = {
//           count: 0
//       }
//   }

//   incrementCounter = () => {
//       this.setState(prevState => {
//           return { count: prevState.count + 1 }
//       })
//   }

//     render() {
//       console.log(this.props.names)
//       return (
//         <div>
//           <WrappedComponent 
//           count={this.state.count} 
//           incrementCounter={this.incrementCounter}
//           {...this.props}
//           />
//         </div>
//       )
//     }
//   }
//   return Withcounter
// }

// export default WithCounter





// Passing Parameters to the HOC function
import React from "react";

const WithCounter = (WrappedComponent, IncrementNumber) => {
  class Withcounter extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        count: 0
      }
    }

    incrementCounter = () => {
      this.setState(prevState => {
        return { count: prevState.count + IncrementNumber }
      })
    }

    render() {
      console.log(this.props.names)
      return (
        <div>
          <WrappedComponent
            count={this.state.count}
            incrementCounter={this.incrementCounter}
            {...this.props}
          />
        </div>
      )
    }
  }
  return Withcounter
}

export default WithCounter