import React from 'react'
import Membro from './Membro'

const nomeFamilia = 'Jeager'

export default () => 
  <div>
    <Membro nome="Eren" sobrenome={nomeFamilia}></Membro>
    <Membro nome="Grisha" sobrenome={nomeFamilia}></Membro>
    <Membro nome="Zeke" sobrenome={nomeFamilia}></Membro>
  </div>