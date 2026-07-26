// import React from 'react'
import React, {useContext} from 'react'
import { MyContext } from './Hook3a'
import Hook3d from './Hook3d'

function Hook3c(props) {
    const user = useContext(MyContext)
  
  return (
    <div className=' border border-red-50 p-5'>
      Component C
      <h2>{`Hellow Again ${user}`}</h2>

      <Hook3d />
      {/* <Hook3d name={props.name} /> */}
      </div>
  )
}

export default Hook3c