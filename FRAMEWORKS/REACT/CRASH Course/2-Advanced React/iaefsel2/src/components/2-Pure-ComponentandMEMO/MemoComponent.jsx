import React from 'react'

function MemoComponent({name}) {
    console.log('Rendering MemoComponent')
  return (
    <div>MemoComponent{ name}</div>
  )
}

export default React.memo(MemoComponent) 