import React from 'react'
import './Button.css'

export default props => {
  let classes = 'button '
  classes += props.operator ? 'operator' : ''
  classes += props.double ? 'double' : ''
  classes += props.triple ? 'triple' : ''

  return (
    <button 
      className={classes}
      onClick={_ => props.click && props.click(props.label)}>
      {props.label}
    </button>
  )
}