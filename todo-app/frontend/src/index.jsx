import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers)

const godTag = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(godTag, document.getElementById('app'))