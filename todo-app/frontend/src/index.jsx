import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'

import App from './main/app'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(promiseMiddleware, thunkMiddleware)(createStore)(reducers, devTools)
// const store = createStore(reducers, applyMiddleware(promiseMiddleware), devTools)

const godTag = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(godTag, document.getElementById('app'))