const INITIAL_VALUE = { value: 'Schumacher'}

export default function(state=INITIAL_VALUE, action) {
  switch(action.type) {
    case 'VALUE_CHANGED':
      return { value: action.payload }
    default:
      return state
  }
}