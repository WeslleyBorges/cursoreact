import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Reducer feike do feiker',
        list: [{
            _id: 1,
            description: 'Aprender react',
            done: true
        }, {
            _id: 2,
            description: 'Apredder redux',
            done: true
        }, {
            _id: 3,
            description: 'Aprender coisa pra krl',
            done: false
        }]
    })
})

export default rootReducer