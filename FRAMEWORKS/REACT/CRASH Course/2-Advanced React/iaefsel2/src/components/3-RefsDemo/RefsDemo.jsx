import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class RefsDemo extends Component {

constructor(props) {
  super(props)

  this.inputRef = React.createRef()
}

componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef)
}

clickHandler=()=>{
    alert(this.inputRef.current.value)
}
  render() {
    return (
      <div>
        <input type="text" className="form-control form-control-lg m-1" ref={this.inputRef} />
        <Button onClick={this.clickHandler} className="btn btn-lg m-1">Click</Button>
      </div>
    )
  }
}

export default RefsDemo


// //SECOND APPROACH
// class RefsDemo extends Component {

//   constructor(props) {
//     super(props)
  
//     this.cbRef = null
//     this.setcbRef = (element) => {
//       this.cbRef = element
//     } 
//     }
  
//   componentDidMount(){
//      if (this.cbRef) {
//       this.cbRef.focus()
//      }
//   }
  
//   clickHandler=()=>{
//       alert(this.inputRef.current.value)
//   }
//     render() {
//       return (
//         <div>
//           <input type="text" className="form-control form-control-lg m-1" ref={this.setcbRef} />
//         </div>
//       )
//     }
//   }
  
//   export default RefsDemo