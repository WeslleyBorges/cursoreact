import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field/field'
 
const reducers = combineReducers({
  field: () => {
    console.log('auau')
    return {value: 'schumacher'}
  }
})

ReactDOM.render(<div>
                  <Provider store={createStore(reducers)}>
                    <Field initialValue="Teste"></Field>
                  </Provider>
                </div>
  , document.getElementById('root'))