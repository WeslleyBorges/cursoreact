const INITIAL_STATE = {  description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SEARCHED':
    case 'TODO_SEARCHED_PENDING':
    case 'DELETE_TODO':
    case 'DELETE_TODO_PENDING':
    case 'DELETE_TODO_FULFILLED':
    case 'TOOGLE_PENDENCY':
    case 'TOOGLE_PENDENCY_PENDING':
    case 'TOOGLE_PENDENCY_FULFILLED':
      return state
    case 'TODO_SEARCHED_FULFILLED':
      return { ...state, list: action.payload.data }
    case 'ADD_TODO':
      return { ...state,  description: ''}
    case 'CLEAN_DESCRIPTION':
      return { ...state, description: action.payload }
    default:
      return state
  }
}