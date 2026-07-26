import React from 'react'
import Hook3c from './Hook3c'

function Hook3b(props) {
  return (
    <div className='border border-white-50 p-5'>
      Component B
      <Hook3c/>
      {/* <Hook3c name={props.name} /> */}
    </div>
  )
}

export default Hook3b