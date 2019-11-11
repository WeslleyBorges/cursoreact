import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

// import Field from './field/field'
// import fieldReducer from './field/fieldReducer'
import counterReducer from './counter/counterReducer'
import Counter from './counter/counter'

// const reducers = combineReducers({
//   field: fieldReducer
// })

// ReactDOM.render(<div>
//                   <Provider store={createStore(reducers)}>
//                     <Field initialValue="Teste"></Field>
//                   </Provider>
//                 </div>
//   , document.getElementById('root'))

const reducers = combineReducers({
  counter: counterReducer
})

ReactDOM.render(<div>
  <Provider store={createStore(reducers)}>
    <Counter></Counter>
  </Provider>
</div>
, document.getElementById('root'))