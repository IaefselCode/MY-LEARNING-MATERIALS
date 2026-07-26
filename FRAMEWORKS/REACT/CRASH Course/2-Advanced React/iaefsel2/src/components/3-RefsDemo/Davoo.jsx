 import React, { Component } from 'react'
 
 class Davoo extends Component {

    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }

     Focusinput(){
     this.inputRef.current.focus()
     }

   render() {
     return (
       <div>
        <input type="text" className="form-control form-control-lg m-1" ref={this.inputRef}/>
       </div>
     )
   }
 }
 
 export default Davoo