import React from 'react'

export default props => 
  <div>
    <button onClick={_ => props.notificarRalaPeito('prasa')}>
      Saindo!
    </button>
  </div>