import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import SegundoComponente from './componentes/SegundoComponente'
// import { CompA, CompB } from './componentes/VariosComponentes'
// import { MultiDiv, MultiFrag, MultiArray} from './componentes/MultiElementos'
// import FamiliaJeager from './componentes/FamiliaJeager'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteFuncional from './componentes/ComponenteFuncional'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elementos = <div>
                    {/* <Contador></Contador> */}
                    {/* <Familia sobrenome="Uchiha">
                      <Membro nome="Sasuke"></Membro>
                      <Membro nome="Itachi"></Membro>
                    </Familia>
                    <ComponenteFuncional></ComponenteFuncional>
                    <Pai/>
                    <ComponenteClasse value="Banana"></ComponenteClasse> */}
                    {/* <PrimeiroComponente valor="Valor do primeiro componente."/>
                    <SegundoComponente idade={22}/>
                    <CompA valor="Sou o componente A"/>
                    <CompB valor="Sou o componente B"/>
                    <MultiArray value="Componente Array"></MultiArray>
                    <MultiDiv value="Componente Div"></MultiDiv>
                    <MultiFrag value="Componente Fragment"></MultiFrag> 
                    <FamiliaJeager></FamiliaJeager> 
                    <Familia sobrenome="Borges">
                      <Membro nome="Weslley"></Membro>
                      {/* <Membro nome="Eren" sobrenome="Locke"></Membro> 
                    </Familia>*/}
                    <Hook/>
                  </div>
const elemento = document.getElementById('root')
ReactDOM.render(elementos, elemento)
