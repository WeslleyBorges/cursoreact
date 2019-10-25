import React from 'react'

const MultiArray = props => [
  <h1>{props.value}</h1>,
  <h2>{props.value}</h2>
] 

const MultiFrag = props => 
  <React.Fragment>
    <h1>{props.value}</h1>
    <h2>{props.value}</h2>
  </React.Fragment>

const MultiDiv = props => 
<div>
  <h1>{props.value}</h1>
  <h2>{props.value}</h2>
</div>

export { MultiArray, MultiFrag, MultiDiv }