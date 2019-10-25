import React, { useState, useEffect } from 'react'

export default props => {
  let [contador, setContador] = useState(0) 
  let [status, setStatus] = useState('Par')

  useEffect(() => {
    contador % 2 === 0 ? setStatus('Par') : setStatus('Ímpar')
  })

  return (
    <div>
      <h1>{contador}</h1>
      <h3>{status}</h3>

      <button onClick={() => setContador(--contador)}>Decrementar</button>
      <button onClick={() => setContador(++contador)}>Incrementar</button>
    </div>
  )
}