export function incrementar() {
  return {
    type: 'INC'
  }
}

export function decrementar() {
  return {
    type: 'DEC'
  }
}

export function stepChanged(event) {
  return {
    type: 'STEP_CHANGED',
    payload: event.target.value
  }
}