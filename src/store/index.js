// Actions
const ADD = 'counter/ADD'
const SUBTRACT = 'counter/SUBTRACT'

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1
    case SUBTRACT:
      return state - 1
    default:
      return state
  }
}

export default reducer

// Action Creators
export const add = () => {
  return {
    type: ADD
  }
}

export const subtract = () => {
  return {
    type: SUBTRACT
  }
}
