import React, {useContext} from 'react'
import { MyContext } from './Hook3a'

function Hook3d(props) {

  const user = useContext(MyContext)
  // You can use the useContext hook to access the user value
  return (
    <div className=' border border-red-50 p-5'>
      Component D
      <h2>{`Bye ${user}`}</h2>
      {/* <h2>{`Bye ${props.name}`}</h2> */}
    </div>
  )
}

export default Hook3d