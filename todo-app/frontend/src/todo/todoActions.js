import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => {
  return {
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
  }
}

export const searchTodo = (description='') => {
  const search = description ? `&description__regex=/${description}/` : description
  const request = axios.get(`${URL}?sort=-createdAt${search}`)

  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}

export const addTodo = description => {
  return dispatch => {
    axios.post(URL, { description })
      .then(res => dispatch({ type: 'ADD_TODO', payload: res.data }))
      .then(res => dispatch(searchTodo()))
  }
}

export const cleanDescription = () => {
  return {
    type: 'CLEAN_DESCRIPTION',
    payload: ''
  }
}

export const deleteTodo = todoId => {
  return dispatch => {
    axios.delete(`${URL}/${todoId}`)
      .then(res => dispatch(search()))
  }
}

export const togglePendency = todo => {
  const todoDone = todo.done ? false : true
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: todoDone })
      .then(res => dispatch(search()))
  }
}