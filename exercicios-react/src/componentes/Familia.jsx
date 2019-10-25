import React from 'react'
import { cloneElementosFilhos } from '../utils/utils'

export default props =>
  <div>
    <div>Família</div>
    {cloneElementosFilhos({...props})}
  </div>