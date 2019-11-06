import React, { useState } from 'react'

export default props => {

  let [field, setField] = useState('')

  return (
    <div>
      <h3>{field}</h3>
      <input type="text" onChange={() => setField()}/>
    </div>
  )
}